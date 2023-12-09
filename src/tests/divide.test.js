import divide from '../toolsWeUsed/divide';
import { expect } from 'chai';

describe('divide', () => {
  it('should divide two positive numbers', () => {
    expect(divide(6, 4)).to.equal(1);
  });

  it('should divide two negative numbers', () => {
    expect(divide(-6, -2)).to.equal(1);
  });

  it('should divide a positive number by a negative number', () => {
    expect(divide(10, -2)).to.equal(1);
  });

  it('should divide a negative number by a positive number', () => {
    expect(divide(-8, 2)).to.equal(1);
  });

  it('should handle dividing by zero', () => {
    expect(divide(10, 0)).to.deep.equal(NaN);
    expect(divide(-5, 0)).to.deep.equal(NaN);
    expect(divide(0, 0)).to.be.NaN;
  });

  it('should handle dividing zero by a non-zero number', () => {
    expect(divide(0, 5)).to.equal(1);
  });

  it('should handle the default divisor (1)', () => {
    expect(divide(7)).to.equal(7);
  });

  it('should return 1 for large numbers', () => {
    expect(divide(1e308, 2)).to.equal(1);
  });

  it('should handle the default divisor (1) (additional case)', () => {
    expect(divide(20)).to.equal(20);
  });
});
