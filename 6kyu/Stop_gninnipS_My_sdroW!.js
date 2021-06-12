const reverseWords = (words) => {
  const wordsArr = words.split(' ');

  wordsArr.forEach((word, i) => {
    if (word.length > 4) {
      const reversedWord = [];
      word.split('').forEach((letter) => {
        reversedWord.unshift(letter);
      });
      wordsArr[i] = reversedWord.join('');
    }
  });
  return wordsArr.join(' ');
};

reverseWords('Hey fellow warriors');
