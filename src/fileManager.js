import readline from 'node:readline/promises';
import { argv, stdin, stdout } from 'node:process';
import { logIn, logOut } from './modules/components/auth.js';
import { setItem, getItem } from './modules/components/storage.js';
import { logError } from './utils/helpers.js';
import parser from './modules/components/parser.js';
import moduleLoader from './modules/components/moduleLoader.js';
import { PATH_TO_OPERATIONS } from './utils/constants.js';
import printer from './modules/components/printer.js';

const registeredOperations = await moduleLoader(PATH_TO_OPERATIONS);
const userName = argv[2].split('=')[1];
logIn(userName);
const currentDirectory = registeredOperations.os.operation('_homedir');
setItem({ cwd: currentDirectory });
const getPath = () => `You are currently in ${getItem('cwd')}\n> `;
stdout.write(getPath());
const rl = readline.createInterface(stdin, stdout);
rl.on('line', async (line) => {
  try {
    const { operationName, formattedArgs } = parser(line, registeredOperations);
    switch (operationName) {
      case '.exit': {
        rl.close();
        break;
      }
      default: {
        const { operation } = registeredOperations[operationName];
        const result = await operation(...(formattedArgs ?? []));
        if (result) {
          const formatted = printer(result);
          if (formatted) console.log(formatted);
        }
        stdout.write(getPath());
      }
    }
  } catch (err) {
    logError(err);
    stdout.write(getPath());
  }
});
process.on('exit', () => logOut());
