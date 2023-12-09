import add from '../add';
import { expect } from 'chai';

describe('add', () => {
  it('should add two numbers', () => {
    expect(add(6, 4)).to.equal(10);
  });

  it('should handle negative numbers', () => {
    expect(add(-6, 4)).to.equal(-2);
  });

  it('should handle zero', () => {
    expect(add(0, 5)).to.equal(5);
    expect(add(-3, 0)).to.equal(-3);
  });

  it('should handle multiple arguments', () => {
    expect(add(1, 2)).to.equal(3);
  });

  it('should handle no arguments', () => {
    expect(add()).to.equal(0);
  });

  it('should return the same value if only one argument is provided', () => {
    expect(add(5,0)).to.equal(5);
  });
});
