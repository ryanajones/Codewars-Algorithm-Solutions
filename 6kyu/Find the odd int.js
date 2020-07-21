function findOdd(A) {
  const countObj = {};

  for (let i = 0; i < A.length; i++) {
    if (!Object.hasOwnProperty.call(countObj, A[i])) {
      countObj[A[i]] = 1;
      delete A[i];
    }
  }

  for (let i = 0; i < A.length; i++) {
    if (Object.hasOwnProperty.call(countObj, A[i])) {
      countObj[A[i]]++;
    }
  }

  const keys = Object.keys(countObj);
  const values = Object.values(countObj);

  for (let i = 0; i < values.length; i++) {
    if (values[i] % 2 === 1) {
      return parseInt(keys[i]);
    }
  }
}
findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]);
