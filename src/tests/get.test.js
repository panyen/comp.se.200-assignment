import get from '../toolsWeUsed/get';
import { expect } from 'chai';

describe('get', () => {
  it('should get the value at the specified path', () => {
    const object = { 'a': [{ 'b': { 'c': 3 } }] };
    expect(get(object, 'a[0].b.c')).to.equal(3);
    expect(get(object, ['a', '0', 'b', 'c'])).to.equal(3);
  });

  it('should return the default value for undefined paths', () => {
    const object = { 'a': [{ 'b': { 'c': 3 } }] };
    expect(get(object, 'a.b.c', 'default')).to.equal('default');
  });

  it('should return undefined for undefined paths if no default value is provided', () => {
    const object = { 'a': [{ 'b': { 'c': 3 } }] };
    expect(get(object, 'a.b.c')).to.equal(undefined);
  });

  it('should return the default value for undefined objects', () => {
    expect(get(null, 'a.b.c', 'default')).to.equal('default');
    expect(get(undefined, 'a.b.c', 'default')).to.equal('default');
  });

  it('should handle arrays as part of the path', () => {
    const object = { 'a': [{ 'b': { 'c': 3 } }] };
    expect(get(object, ['a', 0, 'b', 'c'])).to.equal(3);
  });

  it('should handle non-existing paths with nested objects', () => {
    const object = { 'a': { 'b': { 'c': 3 } } };
    expect(get(object, 'x.y.z', 'default')).to.equal('default');
  });

  it('should handle undefined values within the object', () => {
    const object = { 'a': { 'b': undefined } };
    expect(get(object, 'a.b.c', 'default')).to.equal('default');
  });

  it('should handle nested arrays', () => {
    const object = { 'a': [{ 'b': [1, 2, { 'c': 3 }] }] };
    expect(get(object, 'a[0].b[2].c')).to.equal(3);
  });

  it('should return the default value if the object is undefined', () => {
    expect(get(undefined, 'a.b.c', 'default')).to.equal('default');
  });
});
