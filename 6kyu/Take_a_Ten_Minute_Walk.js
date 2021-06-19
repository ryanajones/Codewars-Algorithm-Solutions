const validWalk = (d) => {
  if (d.length < 10 || d.length > 10) {
    return false;
  }

  let n = 0;
  let s = 0;
  let e = 0;
  let w = 0;

  d.forEach((el) => {
    if (el === 'n') n += 1;
    if (el === 's') s += 1;
    if (el === 'e') e += 1;
    if (el === 'w') w += 1;
  });

  if (n !== s || e !== w) {
    return false;
  }
  return true;
};

validWalk(['w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e']);
