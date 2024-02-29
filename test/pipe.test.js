import { expect, test } from 'bun:test';
import pipe from '../src/pipe';

const addOne = (x) => x + 1;

test("Basic", () => {
    expect(
        pipe(1, [
            addOne,
            String,
        ])
    ).toBe("2");
});

test("Lambdas", () => {
    expect(
        pipe(1, [
            (x) => x * 10,
            (x) => x / 2,
        ])
    ).toBe(5);
});
