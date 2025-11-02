import { createHash } from 'node:crypto';
import { createReadStream } from 'node:fs';
import { pipeline } from 'node:stream/promises';
import { resolve } from 'node:path';
import { getModuleName } from '../../../utils/helpers.js';
import { getItem } from '../../components/storage.js';
import { access } from 'node:fs/promises';

const operationName = getModuleName(import.meta.filename);
const hash = async (pathToFile) => {
  const cwd = getItem('cwd');
  const absolutePath = resolve(cwd, pathToFile);
  await access(absolutePath);
  const hash = createHash('sha256');
  const input = createReadStream(absolutePath);
  await pipeline(input, hash);
  return hash.digest('hex');
};

export default {
  operationName,
  operation: hash,
  argumentsFormat: {
    length: 1,
  },
};
