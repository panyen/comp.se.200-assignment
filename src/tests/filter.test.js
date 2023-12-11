import filter from '../toolsWeUsed/filter';
import { expect } from 'chai';

describe('filter', () => {
  it('should filter elements based on the predicate', () => {
    const isEven = (value) => value % 2 === 0;
    const inputArray = [1, 2, 3, 4, 5, 6];
    const expectedOutput = [2, 4, 6];
    expect(filter(inputArray, isEven)).to.deep.equal(expectedOutput);
  });

  it('should filter elements based on a custom predicate', () => {
    const isUpperCase = (value) => value === value.toUpperCase();
    const inputArray = ['apple', 'Banana', 'CHERRY', 'grape'];
    const expectedOutput = ['CHERRY'];
    expect(filter(inputArray, isUpperCase)).to.deep.equal(expectedOutput);
  });

  it('should handle an empty array', () => {
    const alwaysTrue = () => true;
    expect(filter([], alwaysTrue)).to.deep.equal([[]]);
  });

  it('should handle an array with undefined values', () => {
    const isDefined = (value) => value !== undefined;
    const inputArray = [1, undefined, 3, undefined, 5];
    const expectedOutput = [1, 3, 5];
    expect(filter(inputArray, isDefined)).to.deep.equal(expectedOutput);
  });

  it('should handle a sparse array', () => {
    const isTruthy = (value) => Boolean(value);
    const sparseArray = [, 0, , , 5];
    const expectedOutput = [5];
    expect(filter(sparseArray, isTruthy)).to.deep.equal(expectedOutput);
  });

  it('should return the original array if all elements pass the predicate', () => {
    const isPositive = (value) => value > 0;
    const inputArray = [1, 2, 3];
    expect(filter(inputArray, isPositive)).to.deep.equal(inputArray);
  });
});
