import slice from '../toolsWeUsed/slice';
import { expect } from 'chai';

describe('slice', () => {
  it('should return an empty array for an empty input array', () => {
    expect(slice([])).to.deep.equal([]);
  });

  it('should return a slice of the array from start to end', () => {
    const array = [1, 2, 3, 4, 5];
    expect(slice(array, 1, 4)).to.deep.equal([2, 3, 4]);
  });

  it('should handle negative start and end indices correctly', () => {
    const array = [1, 2, 3, 4, 5];
    expect(slice(array, -3, -1)).to.deep.equal([3, 4]);
  });

  it('should handle negative start index and positive end index correctly', () => {
    const array = [1, 2, 3, 4, 5];
    expect(slice(array, -3, 4)).to.deep.equal([3, 4]);
  });

  it('should handle positive start index and negative end index correctly', () => {
    const array = [1, 2, 3, 4, 5];
    expect(slice(array, 1, -2)).to.deep.equal([2, 3]);
  });

  it('should handle start index greater than end index', () => {
    const array = [1, 2, 3, 4, 5];
    expect(slice(array, 3, 1)).to.deep.equal([]);
  });

  it('should handle start index equal to end index', () => {
    const array = [1, 2, 3, 4, 5];
    expect(slice(array, 2, 2)).to.deep.equal([]);
  });

  it('should handle start index greater than array length', () => {
    const array = [1, 2, 3, 4, 5];
    expect(slice(array, 10)).to.deep.equal([]);
  });

  it('should handle end index greater than array length', () => {
    const array = [1, 2, 3, 4, 5];
    expect(slice(array, 2, 10)).to.deep.equal([3, 4, 5, undefined, undefined, undefined, undefined, undefined]);
  });

  it('should handle undefined end index as the array length', () => {
    const array = [1, 2, 3, 4, 5];
    expect(slice(array, 2)).to.deep.equal([3, 4, 5]);
  });

  it('should handle undefined start index as 0', () => {
    const array = [1, 2, 3, 4, 5];
    expect(slice(array, undefined, 3)).to.deep.equal([1, 2, 3]);
  });

  it('should handle undefined start and end indices as the whole array', () => {
    const array = [1, 2, 3, 4, 5];
    expect(slice(array)).to.deep.equal([1, 2, 3, 4, 5]);
  });

  it('should handle null and undefined input arrays', () => {
    expect(slice(null)).to.deep.equal([]);
    expect(slice(undefined)).to.deep.equal([]);
  });

  it('should handle start and end indices as strings', () => {
    const array = [1, 2, 3, 4, 5];
    expect(slice(array, '1', '4')).to.deep.equal([2, 3, 4]);
  });
});
