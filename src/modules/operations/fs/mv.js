import cp from './cp.js';
import rm from './rm.js';
import { getModuleName } from '../../../utils/helpers.js';

const operationName = getModuleName(import.meta.filename);
const mv = async (pathToFile, pathToDir) => {
  await cp.operation(pathToFile, pathToDir);
  if (pathToFile !== pathToDir) {
    await rm.operation(pathToFile);
  }
};

export default {
  operationName,
  operation: mv,
  argumentsFormat: {
    length: 2,
  },
};
