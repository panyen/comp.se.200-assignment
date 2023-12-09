import drop from '../drop';
import { expect } from 'chai';

describe('drop', () => {
  it('should drop the specified number of elements from the beginning of the array', () => {
    expect(drop([1, 2, 3])).to.deep.equal([2, 3]);
    expect(drop([1, 2, 3], 2)).to.deep.equal([3]);
    expect(drop([1, 2, 3], 0)).to.deep.equal([1, 2, 3]);
    expect(drop(['a', 'b', 'c'], 1)).to.deep.equal(['b', 'c']);
  });

  it('should drop all elements if n is greater than or equal to the array length', () => {
    expect(drop([1, 2, 3], 3)).to.deep.equal([]);
    expect(drop([1, 2, 3], 5)).to.deep.equal([]);
    expect(drop(['a', 'b', 'c'], 4)).to.deep.equal([]);
  });

  it('should handle negative values of n', () => {
    expect(drop([1, 2, 3], -1)).to.deep.equal([1, 2, 3]);
    expect(drop(['a', 'b', 'c'], -2)).to.deep.equal(['a', 'b', 'c']);
  });

  it('should handle empty arrays', () => {
    expect(drop([], 2)).to.deep.equal([]);
  });

  it('should handle arrays with a single element', () => {
    expect(drop([42])).to.deep.equal([]);
    expect(drop([42], 0)).to.deep.equal([42]);
    expect(drop([42], 1)).to.deep.equal([]);
  });

  it('should handle non-integer values of n', () => {
    expect(drop(['a', 'b', 'c'], 2.5)).to.deep.equal(['c']);
  });

  it('should drop one element from the beginning by default (additional case)', () => {
    expect(drop(['a', 'b', 'c'])).to.deep.equal(['b', 'c']);
  });
});
