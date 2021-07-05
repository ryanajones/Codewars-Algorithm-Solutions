const sortArr = (array) => {
  const { length } = array;
  if (length === 0) {
    return [];
  }
  const odds = [];
  const indexOfOdds = [];
  array.forEach((el, i) => {
    if (el % 2 !== 0) {
      odds.push(el);
      indexOfOdds.push(i);
    }
  });
  odds.sort((a, b) => a - b);
  indexOfOdds.forEach((el, i) => {
    array.splice(el, 1, odds[i]);
  });
  return array;
};

sortArr([-39, -17, -32, 43, -17]);
