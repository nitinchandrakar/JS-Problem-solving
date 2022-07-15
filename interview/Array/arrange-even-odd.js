/**
 * Given an array with equal even and odd items, place even element to even index and odd element to odd index
 * consider 0 as even idex
 *
 * input arr =[3,5,7,2,4,6]
 */

function arrangeEvenOdd(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0 && arr[i] % 2 !== 0) {
      let j = i + 1;
      while (j < arr.length) {
        if (arr[j] % 2 === 0) {
          let temp = arr[j];
          arr[j] = arr[i];
          arr[i] = temp;
          break;
        }
        j++;
      }
    }
  }

  return arr;
}

console.log(
  arrangeEvenOdd([
    3, 5, 7, 2, 4, 6, 1, 1, 8, 8, 11, 11, 11, 11, 11, 12, 12, 12, 12, 12,
  ])
);
