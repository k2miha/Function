'use strict';

const methods = iface => {
  const arr = [];
  for (const key in iface) {
    const subarr = new Array();
    const element = iface[key];
    arr.push(subarr);
    subarr.push(key, element.length);
  }
  return arr;
};

module.exports = { methods };
