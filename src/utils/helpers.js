import path from 'node:path';

const getModuleName = (modulePath) => modulePath.split(path.sep).at(-1).split('.').at(0);

export { getModuleName };
