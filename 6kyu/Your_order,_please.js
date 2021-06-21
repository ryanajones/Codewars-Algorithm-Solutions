const orderString = (text) =>
  text
    .split(' ')
    .sort((a, b) => a.match(/\d/) - b.match(/\d/))
    .join(' ');

orderString('is2 Thi1s T4est 3a');
