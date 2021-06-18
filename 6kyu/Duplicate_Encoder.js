const duplicateEncoder = (word) =>
  word
    .toLowerCase()
    .split('')
    .map((letter, i, a) =>
      a.indexOf(letter) === a.lastIndexOf(letter) ? '(' : ')'
    )
    .join('');

duplicateEncoder('wwwwddthw');
