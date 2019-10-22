'use strict';

// const ar = ip.split('.').reverse();
// let sum = 0;
// for (let i = ar.length - 1; i >= 0; i--) {
//   ar[i] = parseInt(ar[i]);
//   for (let j = i; j > 0; j--) {
//     ar[i] = ar[i] << 8;
//   }
//   sum += ar[i];
// }
// return sum;

const ipToInt = (ip = '127.0.0.1') => {
  const fn = (res, item) => (res << 8) + parseInt(item);
  return ip.split('.').reduce(fn, 0);
};

module.exports = { ipToInt };
