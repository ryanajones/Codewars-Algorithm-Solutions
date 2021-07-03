const findSqrt = (array1, array2) => {
  if (!Array.isArray(array1) || !Array.isArray(array2)) {
    return false;
  }
  if (array1.length === 0 || array2.length === 0) {
    return false;
  }
  if (array1.length !== array2.length) {
    return false;
  }

  let r = true;
  array2.forEach((el) => {
    if (array1.indexOf(Math.sqrt(el)) === -1) {
      r = false;
    }
  });
  return r;
};

console.log(
  findSqrt(
    [7, 0, 3, 8, 7, 9, 0, 1, 1, 1, 9, 1],
    [1, 81, 49, 1, 9, 0, 81, 64, 1, 1, 49, 1]
  )
);
const a = [1, 2, 3];
a.splice(1, 0, 4);
console.log(a);

const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
console.log(months);
