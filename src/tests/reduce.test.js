import reduce from '../reduce';
import { expect } from 'chai';

describe('reduce', () => {
  it('should reduce an array with a numerical accumulator', () => {
    const sum = (accumulator, value) => accumulator + value;
    expect(reduce([1, 2, 3], sum, 0)).to.equal(6);
  });

  it('should reduce an array with an object accumulator', () => {
    const groupByValue = (result, value, key) => {
      (result[value] || (result[value] = [])).push(key);
      return result;
    };
    const input = { 'a': 1, 'b': 2, 'c': 1 };
    const expectedOutput = { '1': ['a', 'c'], '2': ['b'] };
    expect(reduce(input, groupByValue, {})).to.deep.equal(expectedOutput);
  });

  it('should use the first element of an array as the initial accumulator if not provided', () => {
    const multiply = (accumulator, value) => accumulator * value;
    expect(reduce([2, 3, 4], multiply)).to.equal(24);
  });

  it('should use the first value of an object as the initial accumulator if not provided', () => {
    const subtract = (accumulator, value) => accumulator - value;
    const input = { 'a': 5, 'b': 2, 'c': 3 };
    expect(reduce(input, subtract)).to.equal(0);
  });

  it('should handle an empty array', () => {
    const iteratee = (accumulator, value) => accumulator + value;
    expect(reduce([], iteratee, 10)).to.equal(10);
  });

  it('should handle an empty object', () => {
    const iteratee = (accumulator, value) => accumulator + value;
    expect(reduce({}, iteratee, 10)).to.equal(10);
  });

  it('should handle an array of undefined values', () => {
    const sum = (accumulator, value) => (value !== undefined ? accumulator + value : accumulator);
    expect(reduce([1, undefined, 3], sum, 0)).to.equal(4);
  });

  it('should handle a sparse array', () => {
    const sum = (accumulator, value) => accumulator + value;
    const sparseArray = [];
    sparseArray[2] = 3;
    expect(reduce(sparseArray, sum, 0)).to.deep.equal(NaN);
  });

  it('should use the first element of an array as the initial accumulator if not provided (additional case)', () => {
    const identity = (value) => value;
    expect(reduce([42], identity)).to.equal(42);
  });
});
