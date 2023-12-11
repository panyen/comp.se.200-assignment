import ceil from '../toolsWeUsed/ceil';
import { expect } from 'chai';

describe('ceil', () => {
  it('should round up to the nearest integer by default', () => {
    expect(ceil(4.006)).to.equal(5);
  });

  it('should round up with specified precision', () => {
    expect(ceil(6.004, 2)).to.equal(6.01);
  });

  it('should round up with negative precision', () => {
    expect(ceil(6040, -2)).to.equal(6100);
  });

  it('should handle negative numbers', () => {
    expect(ceil(-4.006)).to.equal(-4);
  });

  it('should handle precision as zero', () => {
    expect(ceil(8.123, 0)).to.equal(9);
  });

  it('should handle precision as a negative number', () => {
    expect(ceil(12345, -3)).to.equal(13000);
  });

  it('should handle precision greater than the number of decimal places', () => {
    expect(ceil(9.87, 5)).to.equal(9.87);
  });

  it('should handle precision greater than the number itself', () => {
    expect(ceil(3.45, 10)).to.equal(3.45);
  });

  it('should handle precision as a negative number greater than the number of decimal places', () => {
    expect(ceil(123.456, -5)).to.equal(100000);
  });

  it('should handle precision as a negative number greater than the number itself', () => {
    expect(ceil(9876, -10)).to.equal(10000000000);
  });

  it('should round up to the nearest integer by default', () => {
    expect(ceil(4.006)).to.equal(5);
  });
});
