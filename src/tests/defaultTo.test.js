import defaultTo from '../defaultTo';
import { expect } from 'chai';

describe('defaultTo', () => {
  it('should return the value if it is not NaN, null, or undefined', () => {
    expect(defaultTo(1, 10)).to.equal(1);
    expect(defaultTo('hello', 'world')).to.equal('hello');
    expect(defaultTo(true, false)).to.equal(true);
    expect(defaultTo({ key: 'value' }, { key: 'default' })).to.deep.equal({ key: 'value' });
  });

  it('should return the default value if the value is NaN', () => {
    expect(defaultTo(NaN, 10)).to.deep.equal(NaN);
  });

  it('should return the default value if the value is null', () => {
    expect(defaultTo(null, 'default')).to.equal('default');
  });

  it('should return the default value if the value is undefined', () => {
    expect(defaultTo(undefined, 'default')).to.equal('default');
  });

  it('should return the default value if the value is null or undefined, but not if it is NaN', () => {
    expect(defaultTo(NaN, 'default')).to.deep.equal(NaN);
    expect(defaultTo(null, 'default')).to.equal('default');
    expect(defaultTo(undefined, 'default')).to.equal('default');
  });

  it('should return the value if it is not NaN, null, or undefined (additional case)', () => {
    expect(defaultTo('example', 'default')).to.equal('example');
  });
});
