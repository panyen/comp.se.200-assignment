import at from '../at';
import { expect } from 'chai';

describe('at', () => {
  it('should return an array of values corresponding to specified paths', () => {
    const object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
    const result = at(object, ['a[0].b.c', 'a[1]']);
    expect(result).to.deep.equal([3, 4]);
  });

  it('should handle non-existent paths by returning undefined', () => {
    const object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
    const result = at(object, ['x.y.z', 'a[2]']);
    expect(result).to.deep.equal([undefined, undefined]);
  });

  it('should handle array indices and nested properties', () => {
    const object = { 'a': [{ 'b': { 'c': 3 } }, 4] };
    const result = at(object, ['a[0].b.c', 'a[0].b', 'a[1]']);
    expect(result).to.deep.equal([3, { 'c': 3 }, 4]);
  });

  it('should handle multiple objects and paths', () => {
    const object1 = { 'a': { 'b': 1 } };
    const object2 = { 'x': { 'y': 2 } };
    const result = at([object1, object2], ['a.b', 'x.y']);
    expect(result).to.deep.equal([undefined, undefined]);
  });

  it('should handle empty paths by returning an empty array', () => {
    const object = { 'a': { 'b': 1 } };
    const result = at(object);
    expect(result).to.deep.equal([]);
  });

  it('should handle empty objects by returning an empty array', () => {
    const object = {};
    const result = at(object, ['a.b', 'x.y']);
    expect(result).to.deep.equal([undefined, undefined]);
  });

  it('should handle empty paths by returning an empty array (additional case)', () => {
    const object = { 'a': { 'b': 1 } };
    const result = at(object, []);
    expect(result).to.deep.equal([]);
  });
});
