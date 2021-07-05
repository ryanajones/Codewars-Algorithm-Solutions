const findSqrt = (array1, array2) => {
  if (!Array.isArray(array1) || !Array.isArray(array2)) {
    return false;
  }
  let r = true;
  array2.forEach((el) => {
    const index = array1.indexOf(Math.sqrt(el));
    if (index === -1) {
      r = false;
    } else {
      array1.splice(index, 1);
    }
  });

  return r;
};

findSqrt(
  [7, 0, 3, 8, 7, 9, 0, 1, 1, 1, 9, 1],
  [1, 81, 49, 1, 9, 0, 81, 64, 1, 1, 49, 1]
);
