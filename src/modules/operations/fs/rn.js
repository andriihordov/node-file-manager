import { resolve, parse } from 'node:path';
import { rename } from 'node:fs/promises';
import { access } from 'node:fs/promises';
import { getModuleName } from '../../../utils/helpers.js';
import { getItem } from '../../components/storage.js';

const operationName = getModuleName(import.meta.filename);
const rn = async (pathToFile, newFileName) => {
  const cwd = getItem('cwd');
  const absoluteOldPath = resolve(cwd, pathToFile);
  await access(absoluteOldPath);
  const { name, ext } = parse(newFileName);
  const { dir } = parse(absoluteOldPath);
  const absoluteNewPath = resolve(dir, `${name}${ext ?? ''}`);
  await rename(absoluteOldPath, absoluteNewPath);
};

export default {
  operationName,
  operation: rn,
  argumentsFormat: {
    length: 2,
  },
};
