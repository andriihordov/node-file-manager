const storage = {};

const setItem = (item) => {
  const [key, value] = Object.entries(item).flat();
  storage[key] = value;
};
const getItem = (item) => {
  return storage[item];
};
export { setItem, getItem };
