let arr = [1, 2, 3, 7, 4, 5, 6];

arr.forEach(function (value, index, array) {
  console.log(value);
});

Array.prototype.forEachPoly = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};

console.log("---------");
arr.forEachPoly(function (value, index, array) {
  console.log(value);
});
