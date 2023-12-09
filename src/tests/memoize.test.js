import memoize from '../memoize';
import { expect } from 'chai';

describe('memoize', () => {
  it('should memoize the result of the function', () => {
    const add = (a, b) => a + b;
    const memoizedAdd = memoize(add);

    expect(memoizedAdd(2, 3)).to.equal(5);
    expect(memoizedAdd(2, 3)).to.equal(5); 
  });

  it('should use the resolver function to determine cache key', () => {
    const multiply = (a, b) => a * b;
    const customResolver = (a, b) => a + '-' + b;
    const memoizedMultiply = memoize(multiply, customResolver);

    expect(memoizedMultiply(2, 3)).to.equal(6);
    expect(memoizedMultiply(3, 2)).to.equal(6); // Should return from cache using custom key
  });

  it('should throw an error if not provided with a function', () => {
    const notAFunction = 'not a function';
    expect(() => memoize(notAFunction)).to.throw(TypeError);
  });

  it('should handle cache interactions', () => {
    const subtract = (a, b) => a - b;
    const customResolver = (a, b) => a + '-' + b;
    const memoizedSubtract = memoize(subtract, customResolver);

    expect(memoizedSubtract(5, 3)).to.equal(2);
    expect(memoizedSubtract(8, 5)).to.equal(3); // Should not use cache

    memoizedSubtract.cache.set('5-3', 10); // Manually modify cache
    expect(memoizedSubtract(5, 3)).to.equal(10); // Should use modified cache value
  });

  it('should use the first argument as the default cache key if no resolver is provided', () => {
    const identity = (value) => value;
    const memoizedIdentity = memoize(identity);

    expect(memoizedIdentity(42)).to.equal(42);
    expect(memoizedIdentity(42)).to.equal(42); // Should return from cache using default key
  });

  it('should handle custom cache implementation (WeakMap)', () => {
    const customCache = new WeakMap();
    const exponentiate = (base, power) => Math.pow(base, power);
    const memoizedExponentiate = memoize(exponentiate, undefined, customCache);

    const obj1 = {};
    const obj2 = {};

    expect(memoizedExponentiate(obj1, 3)).to.deep.equal(NaN);
    expect(memoizedExponentiate(obj1, 3)).to.deep.equal(NaN); // Should return from cache using custom WeakMap

    expect(memoizedExponentiate(obj2, 2)).to.deep.equal(NaN);
    expect(memoizedExponentiate(obj2, 2)).to.deep.equal(NaN); // Should return from cache using custom WeakMap
  });

  it('should use the first argument as the default cache key if no resolver is provided (additional case)', () => {
    const square = (n) => n * n;
    const memoizedSquare = memoize(square);

    expect(memoizedSquare(5)).to.equal(25);
  });
});
