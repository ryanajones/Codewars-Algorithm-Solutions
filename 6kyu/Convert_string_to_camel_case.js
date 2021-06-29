const camelCase = (str) => {
  let str1 = str;
  const regex = /_\w|-\w/g;
  str1 = str1.replace(regex, (x) => x.toUpperCase());
  str1 = str1.replace(/_|-/g, '');
  return str1;
};

console.log(camelCase('The_stealth_warrior'));
