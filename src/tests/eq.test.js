import eq from '../eq';
import { expect } from 'chai';

describe('eq', () => {
  it('should return true for equivalent values', () => {
    expect(eq(42, 42)).to.equal(true);
    expect(eq('hello', 'hello')).to.equal(true);
    const obj = { 'a': 1 };
    expect(eq(obj, obj)).to.equal(true);
  });

  it('should return false for non-equivalent values', () => {
    expect(eq('hello', 'world')).to.equal(false);
    expect(eq({ 'a': 1 }, { 'a': 1 })).to.equal(false); // Objects with same structure but different references
  });

  it('should return true for equivalent NaN values', () => {
    expect(eq(NaN, NaN)).to.equal(true);
  });

  it('should return false for non-equivalent NaN values', () => {
    expect(eq(NaN, 42)).to.equal(false);

  });

  it('should return true for equivalent values with different types using loose equality', () => {
    expect(eq('42', 42)).to.equal(true);
    expect(eq(true, 1)).to.equal(true);
  });

  it('should return false for non-equivalent values with different types using loose equality', () => {
    expect(eq('42', true)).to.equal(false);
  });

  it('should return false for non-equivalent objects with the same values', () => {
    expect(eq({ 'a': 1 }, { 'a': '1' })).to.equal(false);
  });

  it('should return true for equivalent NaN values (additional case)', () => {
    expect(eq(0 / 0, NaN)).to.equal(true);
  });

  it('should return true for equivalent values with different types using loose equality (additional case)', () => {
    expect(eq(true, '1')).to.equal(true);
  });
});
