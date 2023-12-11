import map from '../toolsWeUsed/map';
import { expect } from 'chai';

describe('map', () => {
  it('should map each element of the array using the provided iteratee', () => {
    const square = n => n * n;
    expect(map([4, 8], square)).to.deep.equal([16, 64]);
  });

  it('should handle empty arrays and return an empty array', () => {
    const iteratee = n => n * 2;
    expect(map([], iteratee)).to.deep.equal([]);
  });

  it('should invoke the iteratee with three arguments: (value, index, array)', () => {
    const iteratee = (value, index, array) => `${value}-${index}-${array.length}`;
    expect(map([1, 2, 3], iteratee)).to.deep.equal(['1-0-3', '2-1-3', '3-2-3']);
  });

  it('should handle undefined and null values in the array', () => {
    const iteratee = n => n * 2;
    expect(map([1, undefined, 3], iteratee)).to.deep.equal([2, NaN, 6]);
    expect(map([null, 5, 8], iteratee)).to.deep.equal([0, 10, 16]);
  });
});
