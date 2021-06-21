const position = (text) =>
  text
    .toUpperCase()
    .match(/[a-z]/gi)
    .map((el) => el.charCodeAt() - 64)
    .join(' ');

console.log(position("The sunset sets at twelve o' clock."));

// Alternative Solution
// const alphabet = [
//   'a',
//   'b',
//   'c',
//   'd',
//   'e',
//   'f',
//   'g',
//   'h',
//   'i',
//   'j',
//   'k',
//   'l',
//   'm',
//   'n',
//   'o',
//   'p',
//   'q',
//   'r',
//   's',
//   't',
//   'u',
//   'v',
//   'w',
//   'x',
//   'y',
//   'z',
// ];
// const position = (text) => {
//   const str = text.toLowerCase();
//   const letterPos = [];
//   for (const letter of str) {
//     if (alphabet.includes(letter)) {
//       alphabet.forEach((el, i) => {
//         if (letter === el) {
//           letterPos.push(i + 1);
//         }
//       });
//     }
//   }
//   return letterPos.join(' ');
// };

// position("The sunset sets at twelve o' clock.");
