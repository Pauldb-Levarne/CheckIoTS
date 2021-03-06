import assert from "assert";

function easyUnpack(values: any[]): any[] {
    // your code here
    return [0, 2, values.length - 2].map(e => values[e])

}

console.log('Example:');
console.log(easyUnpack([1, 2, 3, 4, 5, 6, 7, 9]));

// These "asserts" are used for self-checking
assert.deepEqual(easyUnpack([1, 2, 3, 4, 5, 6, 7, 9]), [1, 3, 7]);
assert.deepEqual(easyUnpack([1, 1, 1, 1]), [1, 1, 1]);
assert.deepEqual(easyUnpack([6, 3, 7]), [6, 7, 3]);

console.log("Coding complete? Click 'Check' to earn cool rewards!");