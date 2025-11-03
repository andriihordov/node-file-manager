const printer = (input) => {
  if (Array.isArray(input)) {
    console.table(input);
  } else if (typeof input === 'object') {
    return Object.values(input)
      .map((chunk) => (typeof chunk === 'object' ? printer(Object.values(chunk)) : chunk))
      .join('\n');
  } else {
    return input;
  }
};

export default printer;
