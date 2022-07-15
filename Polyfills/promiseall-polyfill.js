const fun = function (params) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(params);
    }, 3000);
  });
};

Promise.all([fun(1), fun(2)]).then((response) => {
  console.log(response);
});

const customPromiseAll = function (promiseArr) {
  // story result
  const result = [];
  let countTotalPromise = 0;

  return new Promise(function (resolve, reject) {
    promiseArr.forEach((promise, index) => {
      promise
        .then((response) => {
          countTotalPromise++;
          result.push(response);
          if (countTotalPromise == promiseArr.length) {
            resolve(result);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  });
};

customPromiseAll([fun(1), fun(2)]).then((response) => {
  console.log(response);
});
