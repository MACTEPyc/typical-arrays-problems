
exports.min = function min (array) {
  const len = Array.isArray(array) ? array.length : 0;
  if (len < 1) {
    return 0;
  }
  return array.reduce((min, item) => item < min ? item : min, array[0]);
}

exports.max = function max (array) {
  const len = Array.isArray(array) ? array.length : 0;
  if (len < 1) {
    return 0;
  }
  return array.reduce((max, item) => item > max ? item : max, array[0]);
}

exports.avg = function avg (array) {
  const len = Array.isArray(array) ? array.length : 0;
  if (len < 1) {
    return 0;
  }
  return (array.reduce((sum, item) => sum + item, 0) / len);
}
