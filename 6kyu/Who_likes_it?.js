const likesResponse = (namesArr) => {
  const num = namesArr.length;
  if (num === 0) {
    return 'no one likes this';
  }
  if (num === 1) {
    return `${namesArr[0]} likes this`;
  }
  if (num === 2) {
    return `${namesArr[0]} and ${namesArr[1]} like this`;
  }
  if (num === 3) {
    return `${namesArr[0]}, ${namesArr[1]} and ${namesArr[2]} like this`;
  }
  if (num > 3) {
    return `${namesArr[0]}, ${namesArr[1]} and ${
      namesArr.length - 2
    } others like this`;
  }
};
likesResponse(['Max', 'John', 'Mark']);
