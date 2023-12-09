import toNumber from '../toNumber';
import { expect } from 'chai';

describe('toNumber', () => {
  it('should convert a number to the same number', () => {
    expect(toNumber(3.2)).to.equal(3.2);
    expect(toNumber(Number.MIN_VALUE)).to.equal(5e-324);
    expect(toNumber(Infinity)).to.equal(Infinity);
  });

  it('should convert a numeric string to a number', () => {
    expect(toNumber('3.2')).to.equal(3.2);
    expect(toNumber('-42')).to.equal(-42);
    expect(toNumber('0')).to.equal(0);
  });

  it('should convert a string with leading/trailing whitespace to a number', () => {
    expect(toNumber('  3.2  ')).to.equal(3.2);
    expect(toNumber('  -42  ')).to.equal(-42);
  });

  it('should convert binary and octal strings to numbers', () => {
    expect(toNumber('0b101')).to.equal(5);
    expect(toNumber('0o765')).to.equal(501);
  });

  it('should handle bad hex strings by returning NaN', () => {
    expect(toNumber('-0xabc')).to.be.NaN;
    expect(toNumber('0xdef')).to.be.equal(3567);
  });

  it('should handle symbols by returning NaN', () => {
    const symbol = Symbol('test');
    expect(toNumber(symbol)).to.be.NaN;
  });

  it('should convert objects to numbers using valueOf', () => {
    const obj = {
      valueOf: () => 42
    };
    expect(toNumber(obj)).to.equal(42);
  });

  it('should handle non-string, non-number values', () => {
    const booleanValue = true;
    const nullValue = null;
    const undefinedValue = undefined;
    expect(toNumber(booleanValue)).to.equal(1);
    expect(toNumber(nullValue)).to.equal(0);
    expect(toNumber(undefinedValue)).to.be.NaN;
  });

  it('should handle zero as a special case', () => {
    expect(toNumber(0)).to.equal(0);
    expect(toNumber('0')).to.equal(0);
    expect(toNumber('  0  ')).to.equal(0);
    expect(toNumber('0b0')).to.equal(0);
    expect(toNumber('0o0')).to.equal(0);
  });

});
