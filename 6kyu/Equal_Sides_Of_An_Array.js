const findIndex = (arr) => {
  let equalSides;
  if (arr.length === 1) {
    equalSides = 0;
  }
  arr.forEach((n, i) => {
    if (arr[i - 1] === undefined) {
      const arr2 = arr.slice(i + 1);
      if (arr2.length > 1) {
        if (arr2.reduce((a, b) => a + b) === 0) {
          equalSides = i;
        }
      }
      if (arr2[0] === 0) {
        equalSides = 0;
      }
    }
    if (arr[i + 1] === undefined) {
      const arr1 = arr.slice(0, i);
      if (arr1.length > 1) {
        if (arr1.reduce((a, b) => a + b) === 0) {
          equalSides = i;
        }
      }
      if (arr1[0] === 0) {
        equalSides = 1;
      }
    }
    if (equalSides !== 0) {
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
    }
  });

  if (equalSides === undefined) {
    return -1;
  }
  return equalSides;
};

console.log(findIndex([0, 8]));
