const fizzBuzz = require('./index');

describe('fizzBuzz()', () => {
  it('returns "FizzBuzz" for multiples of 3 and 5', () => {
    expect(fizzBuzz(15)).toBe(`15`);
    expect(fizzBuzz(30)).toBe(`30`);
  });
});