import { createReadStream, createWriteStream } from 'node:fs';
import { createBrotliDecompress } from 'node:zlib';
import { pipeline } from 'node:stream/promises';
import { resolve, parse } from 'node:path';
import { getModuleName } from '../../../utils/helpers.js';
import { getItem } from '../../components/storage.js';
import { access } from 'node:fs/promises';

const operationName = getModuleName(import.meta.filename);
const compress = async (pathToFile, pathToDestination) => {
  const cwd = getItem('cwd');
  const absolutePathToFile = resolve(cwd, pathToFile);
  await access(absolutePathToFile);
  const absolutePathToDestination = resolve(cwd, pathToDestination);
  const input = createReadStream(absolutePathToFile);
  const brotli = createBrotliDecompress();
  const output = createWriteStream(absolutePathToDestination);
  await pipeline(input, brotli, output);
};

export default {
  operationName,
  operation: compress,
  argumentsFormat: {
    length: 2,
  },
};
