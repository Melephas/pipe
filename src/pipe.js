export default function pipe(value, funcs) {
  if (!Array.isArray(funcs)) {
    throw new Error("Must pass in array of functions");
  }

  let currentValue = value;
  for (const func of funcs) {
    currentValue = func(currentValue);
  }

  return currentValue;
}
