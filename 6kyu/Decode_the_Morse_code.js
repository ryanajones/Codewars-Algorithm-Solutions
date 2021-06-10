const patternMap = {
  '.-': 'A',
  '-...': 'B',
  '-.-.': 'C',
  '-..': 'D',
  '.': 'E',
  '..-.': 'F',
  '--.': 'G',
  '....': 'H',
  '..': 'I',
  '.---': 'J',
  '-.-': 'K',
  '.-..': 'L',
  '--': 'M',
  '-.': 'N',
  '---': 'O',
  '.--.': 'P',
  '--.-': 'Q',
  '.-.': 'R',
  '...': 'S',
  '-': 'T',
  '..-': 'U',
  '...-': 'V',
  '.--': 'W',
  '-..-': 'X',
  '-.--': 'Y',
  '--..': 'Z',
  '-----': '0',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '...---...': 'SOS',
  '...---...-.-.--': 'SOS!',
  '-.-.--': '!',
  '.-.-.-': '.',
};

function caretPoint3Spaces(morseCode) {
  const regex = /\s{3}/g;
  const morseCodeArg = morseCode.trim().replace(regex, ' ^ ').split(' ');
  return morseCodeArg;
}
function finalDecodeProcess(decodedExceptCaret) {
  let decodedExceptCaretArg = decodedExceptCaret.join('');
  const regex = /\^/g;
  decodedExceptCaretArg = decodedExceptCaretArg.replace(regex, ' ');
  return decodedExceptCaretArg;
}
function matchMorse(alteredMorse) {
  for (let i = 0; i < alteredMorse.length; i++) {
    if (Object.hasOwnProperty.call(patternMap, alteredMorse[i])) {
      alteredMorse[i] = patternMap[alteredMorse[i]];
    }
  }

  return alteredMorse;
}
function decodeMorse(morseCode) {
  const alteredMorse = caretPoint3Spaces(morseCode);
  const decodedExceptCaret = matchMorse(alteredMorse);
  return finalDecodeProcess(decodedExceptCaret);
}

decodeMorse('-.-.--');
