let arr = [1, 2, 3, 7, 4, 5, 6];

let result = arr.reduce(function (
  previousValue,
  currentValue,
  curreIndex,
  array
) {
  return previousValue + currentValue;
},
0);

console.log(result);

Array.prototype.reducePoly = function (callback, initialValue) {
  let acc = initialValue === undefined ? undefined : initialValue;

  for (let i = 0; i < this.length; i++) {
    if (acc != undefined) {
      acc = callback.call(undefined, acc, this[i], i, this);
    } else {
      acc = this[i];
    }
  }

  return acc;
};
