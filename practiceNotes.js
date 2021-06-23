const findIndex = (arr) => {
  let equalSides;
  arr.forEach((n, i) => {
    if (i >= 1 && i <= arr.length - 2) {
      const arr1 = arr.slice(0, i);
      const arr2 = arr.slice(i + 1, arr.length);
      if (arr1.length > 1 || arr2.length > 1) {
        const arr1Sum = arr1.reduce((a, b) => a + b);
        const arr2Sum = arr2.reduce((a, b) => a + b);
        if (arr1Sum === arr2Sum) {
          equalSides = i;
        }
      }
    }
  });
  if (equalSides) {
    return equalSides;
  }
  return -1;
};

findIndex([1, 2, 3, 4, 3, 2, 1]);
