const reverseWordsSpaces = (s: string): string => {
  let builderStr = '';
  let i = s.length - 1;
  let j = s.length;

  while (i >= 0) {
    if ((s[i] === ' ' && i !== s.length - 1 && s[i + 1] !== ' ') || i === 0) {
      const wordToAdd = s.slice(i, j).trim();
      builderStr += wordToAdd + ' ';

      j = i;
    }

    i--;
  }

  return builderStr.trim();
};

console.log(reverseWordsSpaces('the sky is blue'));
console.log(reverseWordsSpaces('  hello world  '));
console.log(reverseWordsSpaces('a good   example'));
console.log(reverseWordsSpaces('  Bob    Loves  Alice   '));
console.log(reverseWordsSpaces('Alice does not even like bob'));
