import { parse } from 'node:path';
import { getModuleName } from '../../../utils/helpers.js';
import { getItem, setItem } from '../../components/storage.js';
import { access } from 'node:fs/promises';

const operationName = getModuleName(import.meta.filename);
const up = async () => {
  const cwd = getItem('cwd');
  const { dir } = parse(cwd);
  await access(dir);
  setItem({ cwd: dir });
};

export default {
  operationName,
  operation: up,
  argumentsFormat: {
    length: 0,
  },
};
