import toString from '../toolsWeUsed/toString';
import { expect } from 'chai';

describe('toString', () => {
  it('should return "null" for null', () => {
    expect(toString(null)).to.equal('null');
  });

  it('should return undefined as "undefined"', () => {
    expect(toString(undefined)).to.equal("undefined");
  });

  it('should convert strings to the same string', () => {
    expect(toString('test')).to.equal('test');
  });

  it('should convert numbers to strings', () => {
    expect(toString(42)).to.equal('42');
    expect(toString(-0)).to.equal('-0');
    expect(toString(Infinity)).to.equal('Infinity');
    expect(toString(NaN)).to.equal('NaN');
  });

  it('should convert arrays to comma-separated strings', () => {
    expect(toString([1, 2, 3])).to.equal('1,2,3');
    expect(toString([null, undefined, 'test'])).to.equal(',,test');
  });

  it('should convert symbols to string representations', () => {
    const symbol = Symbol('test');
    expect(toString(symbol)).to.equal(symbol.toString());
  });

  it('should handle nested arrays and symbols', () => {
    const nestedArray = [1, [2, [3, Symbol('test')]]];
    expect(toString(nestedArray)).to.equal('1,2,3,' + Symbol('test').toString());
  });

  it('should preserve the sign of -0', () => {
    expect(toString(-0)).to.equal('-0');
  });

  it('should handle non-string, non-number values', () => {
    const booleanValue = true;
    const objectValue = { key: 'value' };
    expect(toString(booleanValue)).to.equal('true');
    expect(toString(objectValue)).to.equal('[object Object]');
  });

  it('should handle an empty string as a special case', () => {
    expect(toString('')).to.equal('');
  });
});
