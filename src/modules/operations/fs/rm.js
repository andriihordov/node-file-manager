import { resolve } from 'node:path';
import { rm as remove } from 'node:fs/promises';
import { getModuleName } from '../../../utils/helpers.js';
import { getItem } from '../../components/storage.js';

const operationName = getModuleName(import.meta.filename);
const rm = async (fileName) => {
  const cwd = getItem('cwd');
  const absolutePath = resolve(cwd, fileName);
  await remove(absolutePath);
};

export default {
  operationName,
  operation: rm,
  argumentsFormat: {
    length: 1,
  },
};
