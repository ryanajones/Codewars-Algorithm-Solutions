const deleteN = (arr, n) => {
  const tempArr = [];
  arr.forEach((num) => {
    let count = 0;
    tempArr.forEach((el) => {
      if (el === num) count++;
    });
    if (count < n) tempArr.push(num);
  });
  return tempArr;
};

deleteN(
  [
    38,
    38,
    6,
    32,
    13,
    38,
    38,
    16,
    37,
    13,
    19,
    32,
    32,
    19,
    13,
    37,
    20,
    32,
    20,
    32,
    32,
  ],
  2
);
