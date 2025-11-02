import { parse } from 'node:path';

const getModuleName = (modulePath) => parse(modulePath).name;

const logError = (err) => {
  switch (err.name) {
    case 'TypeError':
    case 'Reference Error': {
      console.log('Invalid input');
      break;
    }
    default: {
      console.log('Operation failed');
      break;
    }
  }
};

export { getModuleName, logError };
