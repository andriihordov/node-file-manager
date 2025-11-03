import { mkdir as makeDirectory } from 'node:fs/promises';
import { resolve } from 'node:path';
import { getModuleName } from '../../../utils/helpers.js';
import { getItem } from '../../components/storage.js';

const operationName = getModuleName(import.meta.filename);
const mkdir = async (dirName) => {
  const cwd = getItem('cwd');
  const fullName = resolve(cwd, dirName);
  await makeDirectory(fullName);
};

export default {
  operationName,
  operation: mkdir,
  argumentsFormat: {
    length: 1,
  },
};
