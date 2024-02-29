export default function pipe(value, funcs) {
    if (!Array.isArray(funcs)) {
        throw new Error("Must pass in array of functions");
    }

    var currentValue = value;
    for (const func of funcs) {
        const newValue = func(currentValue);
        currentValue = newValue;
    }

    return currentValue;
}
