import assert from "assert";

var backwardString = (value: string): string => value.split('').reverse().join('')

console.log('Example:');
console.log(backwardString('val'));

// These "asserts" are used for self-checking
assert.equal(backwardString('val'), 'lav');
assert.equal(backwardString(''), '');
assert.equal(backwardString('ohho'), 'ohho');
assert.equal(backwardString('123456789'), '987654321');

console.log("Coding complete? Click 'Check' to earn cool rewards!");