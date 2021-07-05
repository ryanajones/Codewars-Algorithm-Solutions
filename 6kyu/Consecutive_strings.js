const longestConcat = (strarr, k) => {
  if (k <= 0) return '';
  if (k > strarr.length) return '';
  const concatenated = [];
  for (let i = 0; i <= strarr.length - k; i++) {
    const t = strarr.slice(i, i + k);
    concatenated.push(t.join(''));
  }
  const longest = [concatenated[0].length, concatenated[0]];
  for (let i = 1; i < concatenated.length; i++) {
    if (concatenated[i].length > longest[0]) {
      longest[0] = concatenated[i].length;
      longest[1] = concatenated[i];
    }
  }
  return longest[1];
};

longestConcat(
  [
    'ejjjjmmtthh',
    'zxxuueeg',
    'aanlljrrrxx',
    'dqqqaaabbb',
    'oocccffuucccjjjkkkjyyyeehh',
  ],
  2
);
