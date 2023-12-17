import { main } from '../src';

test('adds two numbers correctly', () => {
    const result = main(61, 1040, 1, 0.001);
    expect(result).toBe("00183D209008280038EFA48CD40340018052692E");
});
