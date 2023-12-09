import map from '../map';
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

  it('should handle arrays with a single element', () => {
    const double = n => n * 2;
    expect(map([42], double)).to.deep.equal([84]);
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

  it('should handle negative values in the array', () => {
    const iteratee = n => n * 3;
    expect(map([-2, -4, -6], iteratee)).to.deep.equal([-6, -12, -18]);
  });

  it('should handle objects in the array', () => {
    const iteratee = obj => obj.value * 2;
    const array = [{ value: 3 }, { value: 7 }, { value: 11 }];
    expect(map(array, iteratee)).to.deep.equal([6, 14, 22]);
  });

  it('should handle arrays with a single element (additional case)', () => {
    const identity = value => value;
    expect(map([42], identity)).to.deep.equal([42]);
  });
});
