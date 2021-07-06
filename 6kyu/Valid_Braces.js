const regex = /\(\)|\[\]|\{\}/g;
const valid = (braces) => {
  if (regex.test(braces)) {
    return valid(braces.replace(regex, ''));
  }
  return braces === '';
};

valid('[({})]');
