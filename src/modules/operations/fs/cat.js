import { createReadStream } from 'node:fs';
import { resolve } from 'node:path';
import { getItem } from '../../components/storage.js';
import { getModuleName } from '../../../utils/helpers.js';

const operationName = getModuleName(import.meta.filename);
const cat = async (fileName) => {
  const cwd = getItem('cwd');
  const input = createReadStream(resolve(cwd, fileName));
  return input;
};

export default {
  operationName,
  operation: cat,
  argumentsFormat: {
    length: 1,
  },
};
