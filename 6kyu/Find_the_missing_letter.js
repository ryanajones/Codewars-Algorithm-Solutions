const missingLetter = (array) => {
  let missing;
  for (let i = 0; i < array.length; i++) {
    if (array[i + 1] === undefined) {
      if (array[i - 1].charCodeAt(0) !== array[i].charCodeAt(0) - 1) {
        const t = array[i].charCodeAt(0) - 1;
        missing = String.fromCharCode(t);
      }
    }
    if (array[i + 1] !== undefined) {
      if (array[i + 1].charCodeAt(0) !== array[i].charCodeAt(0) + 1) {
        const t = array[i].charCodeAt(0) + 1;
        missing = String.fromCharCode(t);
      }
    }
  }
  return missing;
};

missingLetter(['a', 'b', 'c', 'd', 'f']);
