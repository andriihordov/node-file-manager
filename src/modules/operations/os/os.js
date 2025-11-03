import * as osInfo from 'node:os';
import { getModuleName } from '../../../utils/helpers.js';

const operationName = getModuleName(import.meta.filename);
const makeEOLVisible = (EOL) => (/\r\n/.test(osInfo.EOL) ? "'\\r\\n'" : "'\\n'");
const information = {
  EOL: {
    message: `The default system End-Of-Line is ${makeEOLVisible(osInfo.EOL)}`,
  },
  cpus: {
    value: osInfo.cpus().map(({ model, speed }) => ({
      model,
      speed,
    })),
    amount: `Amount of CPUS: ${osInfo.cpus().length}`,
  },
  homedir: {
    message: `The 'homedir' of the current user is ${osInfo.userInfo().homedir}`,
  },
  _homedir: osInfo.userInfo().homedir,
  architecture: {
    message: `The CPU architecture for which Node.js binary has compiled is ${osInfo.arch()}`,
  },
  username: `The current system user name is ${osInfo.userInfo().username}`,
};
const os = (arg) => {
  if (information[arg]) {
    return information[arg];
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
