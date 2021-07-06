const findNum = (arr) => {
  const num1 = [arr[0], 1];
  const num2 = [0, 0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === num1[0]) {
      num1[1]++;
    } else {
      num2[0] = arr[i];
      num2[1]++;
    }
  }
  return num1[1] > num2[1] ? num2[0] : num1[0];
};
findNum([0, 1, 0]);
