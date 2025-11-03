import { readdir } from 'node:fs/promises';
import { resolve } from 'node:path';
import { getModuleName } from '../../../utils/helpers.js';
import { getItem } from '../../components/storage.js';

const operationName = getModuleName(import.meta.filename);
const ls = async () => {
  const cwd = getItem('cwd');
  const dirContent = await readdir(resolve(cwd), { withFileTypes: true });
  const formatted = dirContent
    .map((dirent) => {
      const fsObject = {};
      fsObject.name = dirent.name;
      fsObject.type = dirent.isFile() ? '<FILE>' : '<DIR>';
      return fsObject;
    })
    .sort((a, b) => {
      if (a.type !== b.type) {
        return a.type === '<DIR>' ? -1 : 1;
      }
      return a.name - b.name;
    });
  return formatted;
};

export default {
  operationName,
  operation: ls,
  argumentsFormat: {
    length: 0,
  },
};
