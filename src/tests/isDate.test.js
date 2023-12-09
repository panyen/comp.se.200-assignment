import isDate from '../toolsWeUsed/isDate';
import { expect } from 'chai';

describe('isDate', () => {
  it('should return true for a valid Date object', () => {
    expect(isDate(new Date())).to.equal(true);
  });

  it('should return false for a string representation of a date', () => {
    expect(isDate('Mon April 23 2012')).to.equal(false);
  });

  it('should return false for a number', () => {
    expect(isDate(123456789)).to.equal(false);
  });

  it('should return false for an array', () => {
    expect(isDate([2022, 12, 1])).to.equal(false);
  });

  it('should return false for an object', () => {
    expect(isDate({ year: 2022, month: 12, day: 1 })).to.equal(false);
  });

  it('should return false for null', () => {
    expect(isDate(null)).to.equal(false);
  });

  it('should return false for undefined', () => {
    expect(isDate(undefined)).to.equal(false);
  });

  it('should return false for a boolean', () => {
    expect(isDate(true)).to.equal(false);
    expect(isDate(false)).to.equal(false);
  });

  it('should return false for other types (additional case)', () => {
    expect(isDate(Symbol('test'))).to.equal(false);
  });
});
