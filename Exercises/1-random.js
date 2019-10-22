'use strict';

const random = (min, max) => {
  const randomNumberFromRan = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNumberFromRan;
};

module.exports = { random };
