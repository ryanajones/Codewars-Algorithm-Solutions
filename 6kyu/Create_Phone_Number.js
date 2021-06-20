const phoneNumber = (n) => {
  const numStr = n.join('');
  return `(${numStr.substring(0, 3)}) ${numStr.substring(
    3,
    6
  )}-${numStr.substring(6)}`;
};

console.log(phoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

// Alternative solution
// `(${n[0]}${n[1]}${n[2]}) ${n[3]}${n[4]}${n[5]}-${n[6]}${n[7]}${n[8]}${n[9]}`;
