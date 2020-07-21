function persistence(num) {
  let count = 0;
  const numArr = `${num}`.split('');

  if (numArr.length > 1) {
    let numArg = `${numArr.reduce((x, y) => x * y)}`.split('');
    count++;

    while (numArg.length > 1) {
      numArg = `${numArg.reduce((x, y) => x * y)}`.split('');
      count++;
    }
  }
  return count;
}

persistence(39);
