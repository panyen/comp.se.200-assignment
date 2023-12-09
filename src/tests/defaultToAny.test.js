import defaultToAny from '../toolsWeUsed/defaultToAny';
import { expect } from 'chai';

describe('defaultToAny', () => {
  it('should return the value if it is not NaN, null, or undefined', () => {
    expect(defaultToAny(1, 10, 20)).to.equal(1);
    expect(defaultToAny('hello', 'world', 'fallback')).to.equal('hello');
    expect(defaultToAny(true, false, null)).to.equal(true);
    expect(defaultToAny({ key: 'value' }, { key: 'default' }, { key: 'fallback' })).to.deep.equal({ key: 'value' });
  });

  it('should return the first non-NaN, non-null, non-undefined default value', () => {
    expect(defaultToAny(undefined, 10, 20)).to.equal(10);
    expect(defaultToAny(undefined, null, 20)).to.equal(20);
    expect(defaultToAny(undefined, null, NaN)).to.be.NaN;
  });

  it('should return NaN if the value is NaN', () => {
    expect(defaultToAny(NaN, 10, 'fallback')).to.deep.equal(NaN);
  });

  it('should return the default value if the value is null', () => {
    expect(defaultToAny(null, 'default', 'fallback')).to.equal('default');
  });

  it('should return the default value if the value is undefined', () => {
    expect(defaultToAny(undefined, 'default', 'fallback')).to.equal('default');
  });

  it('should return the NaN if all values are NaN, null, or undefined', () => {
    expect(defaultToAny(undefined, null, NaN, 'fallback')).to.deep.equal(NaN);
  });

  it('should return the value if it is not NaN, null, or undefined (additional case)', () => {
    expect(defaultToAny('example', 'default', 'fallback')).to.equal('example');
  });
});
