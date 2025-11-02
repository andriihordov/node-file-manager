import { createReadStream, createWriteStream } from 'node:fs';
import { pipeline } from 'node:stream/promises';
import { getModuleName } from '../../../utils/helpers.js';
import { resolve, parse } from 'node:path';
import { getItem } from '../../components/storage.js';
import { access } from 'node:fs/promises';

const operationName = getModuleName(import.meta.filename);

const cp = async (pathToFile, pathToNewDirectory) => {
  const cwd = getItem('cwd');
  const absoluteSourcePath = resolve(cwd, pathToFile);
  await access(absoluteSourcePath);
  const { name, ext } = parse(absoluteSourcePath);
  const fileName = `${name}${ext ?? ''}`;
  const absoluteDestinationPath = resolve(cwd, pathToNewDirectory, fileName);
  if (absoluteDestinationPath !== absoluteSourcePath) {
    await pipeline(createReadStream(absoluteSourcePath), createWriteStream(absoluteDestinationPath, { flags: 'wx' }));
  }
};

export default {
  operationName,
  operation: cp,
  argumentsFormat: {
    length: 2,
  },
};
