import { setItem, getItem } from './storage.js';
import { GREET_MESSAGE, BYE_MESSAGE } from '../../utils/constants.js';

const logIn = (userName) => {
  setItem({ userName });
  console.log(GREET_MESSAGE.replace('Username', userName));
};
const logOut = () => {
  const userName = getItem('userName');
  console.log(BYE_MESSAGE.replace('Username', userName));
};
export { logIn, logOut };
