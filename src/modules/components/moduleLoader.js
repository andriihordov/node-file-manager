import { readdir } from 'node:fs/promises';
import { resolve } from 'node:path';

const moduleLoader = async (path, exclude = []) => {
  const absolutePath = resolve(path);
  const files = await readdir(absolutePath, { recursive: true });
  const filtered = files.filter((file) => !exclude.includes(file));
  const modules = filtered
    .filter((file) => file.endsWith('.js'))
    .map(async (file) => {
      const module = await import(resolve(absolutePath, file));
      return module.default;
    });
  const loadedModules = (await Promise.all(modules)).reduce((acc, cur, i) => {
    acc[cur?.operationName ?? i] = {
      operation: cur?.operation ?? null,
      argumentsFormat: cur?.argumentsFormat ?? null,
      outputOptions: cur?.outputOptions ?? null,
    };
    return acc;
  }, {});
  return loadedModules;
};
export default moduleLoader;
