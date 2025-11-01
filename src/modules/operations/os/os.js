import * as osInfo from 'node:os';
import { getModuleName } from '../../../utils/helpers.js';

const operationName = getModuleName(import.meta.filename);
const args = {
  EOL: {
    message: 'The default system End-Of-Line is ',
    value: undefined,
  },
  cpus: {
    message: 'System information about CPUs: ',
    value: undefined,
  },
  homedir: {
    message: 'The `homedir` of the current user is ',
    value: undefined,
  },
  arch: {
    message: 'The CPU architecture for which Node.js binary has compiled is ',
    value: undefined,
  },
};
const availableOperations = Object.entries(args).reduce(
  (acc, [key, current]) => ({
    ...acc,
    [key]: { ...current, value: typeof osInfo[key] === 'function' ? osInfo[key]() : osInfo[key] },
  }),
  {}
);
availableOperations.EOL.value = /\r\n/.test(availableOperations.EOL) ? "'\\r\\n'" : "'\\n'";
availableOperations.username = { message: 'The current system user name is ', value: osInfo.userInfo().username };
availableOperations.cpus.value = {
  ...availableOperations.cpus.value.map(({ model, speed }) => ({ model, speed })),
};
availableOperations.architecture = availableOperations.arch;
const os = (arg) => {
  if (availableOperations[arg]) {
    return availableOperations[arg];
  } else {
    throw new ReferenceError('Unknown operation');
  }
};
export default {
  operationName,
  operation: os,
  argumentsFormat: {
    regExp: /^[-]{2}/,
    length: 1,
  },
};
