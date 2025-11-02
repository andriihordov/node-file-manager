import { createReadStream, createWriteStream } from 'node:fs';
import { pipeline } from 'node:stream/promises';
import { getModuleName } from '../../../utils/helpers.js';
import { resolve } from 'node:path';
import { getItem } from '../../components/storage.js';
import { access } from 'node:fs/promises';

const operationName = getModuleName(import.meta.filename);

const cp = async (source, destination) => {
  const cwd = getItem('cwd');
  const absoluteSourcePath = resolve(cwd, source);
  const absoluteDestinationPath = resolve(cwd, destination);
  await access(absoluteSourcePath);
  await pipeline(createReadStream(absoluteSourcePath), createWriteStream(absoluteDestinationPath, { flags: 'wx' }));
};

export default {
  operationName,
  operation: cp,
  argumentsFormat: {
    length: 2,
  },
};
