type Results = {
  score: number;
  word: string;
};

type LettersObj = {
  [key: string]: number;
};

const words = [
  'QUIET',
  'QUIT',
  'ATE',
  'AS',
  'ZEBRA',
  'APPLE',
  'PEAR',
  'BANANA',
  'MELON',
  'MANGO',
  'DONKEY',
  'MONKEY',
];

const scores: LettersObj = {
  a: 1,
  b: 3,
  c: 3,
  d: 2,
  e: 1,
  f: 4,
  g: 2,
  h: 4,
  i: 1,
  j: 8,
  k: 5,
  l: 1,
  m: 3,
  n: 1,
  o: 1,
  p: 3,
  q: 10,
  r: 1,
  s: 1,
  t: 1,
  u: 1,
  v: 4,
  w: 4,
  x: 8,
  y: 4,
  z: 10,
};

function createLettersCountObj(str: string): LettersObj {
  const lettersCountObj = {} as LettersObj;

  for (let i = 0; i < str.length; i++) {
    let letter = str[i];

    if (lettersCountObj.hasOwnProperty(letter)) {
      lettersCountObj[letter] = lettersCountObj[letter] + 1;
    } else {
      lettersCountObj[letter] = 1;
    }
  }

  return lettersCountObj;
}

function compareLetterObjs(letters1: LettersObj, letters2: LettersObj) {
  let wordCanBeCreated = false;

  for (const [key, val] of Object.entries(letters1)) {
    if (letters2[key] && letters2[key] >= val) {
      wordCanBeCreated = true;
    } else {
      wordCanBeCreated = false;
      break;
    }
  }

  return wordCanBeCreated;
}

function scrabbleScores(tiles: string, words: string[]): Results[] {
  let results: Results[] = [];
  const tilesCountObj = createLettersCountObj(tiles);

  for (let i = 0; i < words.length; i++) {
    let currWord = words[i];
    let currWordLetterCountObj = createLettersCountObj(currWord);
    let wordCanBeCreated = compareLetterObjs(
      currWordLetterCountObj,
      tilesCountObj
    );

    if (wordCanBeCreated) {
      let currWordScore = currWord
        .split('')
        .map((letter) => scores[letter.toLowerCase()])
        .reduce((prev, curr) => prev + curr);

      results.push({ score: currWordScore, word: currWord });
    }
  }

  return results.sort((a, b) => b.score - a.score);
}

console.log(scrabbleScores('SQTUIEA', words));
console.log(scrabbleScores('BZARE', words));
