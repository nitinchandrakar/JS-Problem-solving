/**
 * Flatter Array
 * input = [1,2,[3,4,[5,6,7,[8]]]]
 */

function getFlattern(arr) {
  return arr.reduce((acc, curr) => {
    return acc.concat(Array.isArray(curr) ? getFlattern(curr) : curr);
  }, []);
}

console.log(getFlattern([1, 2, [3, 4, [5, 6, 7, [8]]]]));
