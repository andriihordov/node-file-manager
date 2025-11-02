const parser = (line, operations) => {
  const [operationName, ...args] = line.trimEnd().match(/(?:[^\s"]+|"[^"]*")+/g);
  try {
    if (args.length) {
      const { checker, length, regExp } = operations[operationName].argumentsFormat;
      if (args.length !== length) throw new Error('Wrong arguments length');
      if (checker)
        args.forEach((argument) => {
          try {
            checker(argument);
          } catch {
            throw new Error('Invalid argument');
          }
        });
      const formattedArgs = regExp ? args.map((arg) => arg.replace(regExp, '')) : args;
      return { operationName, formattedArgs };
    }
    return { operationName };
  } catch {
    throw new TypeError('Invalid input');
  }
};
export default parser;
