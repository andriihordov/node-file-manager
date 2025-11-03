import { resolve } from 'node:path';
import { getModuleName } from '../../../utils/helpers.js';
import { getItem, setItem } from '../../components/storage.js';
import { access } from 'node:fs/promises';

const operationName = getModuleName(import.meta.filename);
const cd = async (path) => {
  const cwd = getItem('cwd');
  const absolutePath = resolve(cwd, path);
  await access(absolutePath);
  setItem({ cwd: absolutePath });
};

export default {
  operationName,
  operation: cd,
  argumentsFormat: {
    regExp: /"|"\b/g,
    length: 1,
  },
};
