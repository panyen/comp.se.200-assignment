import countBy from '../countBy';
import { expect } from 'chai';

describe('countBy', () => {
  it('should count occurrences based on the result of the iteratee function', () => {
    const users = [
      { 'user': 'barney', 'active': true },
      { 'user': 'betty', 'active': true },
      { 'user': 'fred', 'active': false },
    ];
    const result = countBy(users, value => value.active);
    expect(result).to.deep.equal({ 'true': 1, 'false': 0 });
  });

  it('should handle an empty array and return an empty object', () => {
    const result = countBy([], value => value);
    expect(result).to.deep.equal({});
  });

  it('should count occurrences for an array of numbers', () => {
    const numbers = [1, 2, 3, 4, 5, 1, 2, 3, 4];
    const result = countBy(numbers, value => value % 2 === 0 ? 'even' : 'odd');
    expect(result).to.deep.equal({ 'odd': 4, 'even': 3 });
  });

  it('should count occurrences for an object with keys as numbers', () => {
    const obj = { 1: 'one', 2: 'two', 3: 'three', 4: 'four' };
    const result = countBy(obj, value => value.length);
    expect(result).to.deep.equal({ '3': 1, '4': 0, '5': 0 });
  });

  it('should count occurrences for an object with non-numeric keys', () => {
    const obj = { 'one': 1, 'two': 2, 'three': 3, 'four': 4 };
    const result = countBy(obj, value => value % 2 === 0 ? 'even' : 'odd');
    expect(result).to.deep.equal({ 'odd': 1, 'even': 1 });
  });

  it('should handle an empty object and return an empty object (additional case)', () => {
    const result = countBy({}, value => value);
    expect(result).to.deep.equal({});
  });
});
