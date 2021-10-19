//const { test, expect } = require('@jest/globals')
const function1 = require('./function1')

test('Removes vowels from a to equal ""', () => {
    expect(function1("a")).toBe("");
});

test('Removes vowels from eeeeeee to equal ""', () => {
    expect(function1("eeeeeee")).toBe("");
});

test('Removes vowels from J to equal J', () => {
    expect(function1("J")).toBe("J");
});

test('Removes vowels from Riley Ball to equal Rly Bll', () => {
    expect(function1("Riley Ball")).toBe("Rly Bll");
});

test('Removes vowels from Snth to equal Snth', () => {
    expect(function1("Snth")).toBe("Snth");
});