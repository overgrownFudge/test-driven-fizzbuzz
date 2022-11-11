const fizzBuzz = require('./index');

describe('fizzBuzz()', () => {
  it('returns "FizzBuzz" for multiples of 3 and 5', () => {
    expect(fizzBuzz(15)).toBe('FizzBuzz');
    expect(fizzBuzz(30)).toBe(`FizzBuzz`);
  });

  it('returns "Buzz" for multiples of 3', () => {
    expect(fizzBuzz(6)).toBe("Buzz")
    expect(fizzBuzz(12)).toBe("Buzz")
  })

  it('returns "Fizz" for multiples of 5', () => {
    expect(fizzBuzz(10)).toBe('Fizz')
    expect(fizzBuzz(25)).toBe('Fizz')
  })

  it('reurns the given number of multiples of neither 3 nor 5', () => {
    expect(fizzBuzz(1)).toBe('1')
    expect(fizzBuzz(22)).toBe('22')
  })

});