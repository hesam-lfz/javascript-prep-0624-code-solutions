/* exported reverseWord */
const reverseWord = (s) =>
  s ? s[s.length - 1] + reverseWord(s.substring(0, s.length - 1)) : '';
