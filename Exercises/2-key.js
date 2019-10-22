'use strict';

const generateKey = (length, possible) => {
  let arra = [];
  for (let i = 0; i < length; i++) {
    arra[i] = possible[Math.floor(Math.random() * Math.floor(possible.length))];
  }
  arra = arra.join('');
  return arra;
};

module.exports = { generateKey };
