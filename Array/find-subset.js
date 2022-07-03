/**
 * Find All Subsets of a Set in JavaScript
 * const arr = [1, 2, 3];
 * const output = [
   [2],
   [1],
   [3],
   [1,2,3],
   [2,3],
   [1,2],
   [1, 3],
   []
];

Ref : 
https://www.geeksforgeeks.org/backtracking-to-find-all-subsets/
https://thewebdev.info/2021/08/15/how-to-find-all-subsets-of-a-set-in-javascript/

 * 
*/

const getAllSubsets =
  theArray => theArray.reduce(
    (subsets, value) => subsets.concat(
      subsets.map(set => [value, ...set])
    ),
    [
      []
    ]
  );

console.log(getAllSubsets([1, 2, 3]));