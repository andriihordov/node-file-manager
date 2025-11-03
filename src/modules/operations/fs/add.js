import { getItem } from '../../components/storage.js';
import { resolve } from 'node:path';
import { getModuleName } from '../../../utils/helpers.js';
import { writeFile } from 'node:fs/promises';

const operationName = getModuleName(import.meta.filename);
const add = async (fileName, content = '') => {
  const cwd = getItem('cwd');
  const fullPath = resolve(cwd, fileName);
  await writeFile(fullPath, content, { flag: 'wx' });
};
export default {
  operationName,
  operation: add,
  argumentsFormat: {
    length: 1,
  },
};
