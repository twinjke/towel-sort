
// You should implement your task here.

module.exports = function towelSort(matrix) {
  if (!matrix) {
      return [];
  }
  return matrix.map((el, i) => (i % 2 ? el.reverse() : el)).flat();
};

