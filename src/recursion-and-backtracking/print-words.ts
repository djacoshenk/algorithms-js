/*

Phone Number Mnemonics: Given an N digit phone number, print all the strings that canbe made from that phone number. Since 1 and 0 don't correspond to any characters, ignore them.

213 => AD, AE, AF, BD, BE, BF, CE, CE, CF
456 => GJM, GJN, GJO, GKM, GKN, GKO,.. etc.

*/

export function printWords(phoneNumber: number[]) {
  if (phoneNumber == null || phoneNumber.length === 0) {
    return;
  }

  let buffer = new Array(phoneNumber.length);

  printWordsHelper(phoneNumber, buffer, 0, 0);
}

function printWordsHelper(
  arr: number[],
  buffer: string[],
  startIndex: number,
  bufferIndex: number
) {
  // termination case
  if (bufferIndex >= buffer.length || startIndex >= arr.length) {
    printArray(buffer);
    return;
  }

  // find candidates for buffer position
  let letters = getLettersHelper(arr[startIndex]);

  if (letters?.length === 0) {
    printWordsHelper(arr, buffer, startIndex + 1, bufferIndex);
  }

  if (letters) {
    for (const letter of letters) {
      buffer[bufferIndex] = letter;
      printWordsHelper(arr, buffer, startIndex + 1, bufferIndex + 1);
    }
  }
}

function getLettersHelper(digit: number) {
  switch (digit) {
    case 0:
      return [];
    case 1:
      return [];
    case 2:
      return ['a', 'b', 'c'];
    case 3:
      return ['d', 'e', 'f'];
    case 4:
      return ['g', 'h', 'i'];
    case 5:
      return ['j', 'k', 'l'];
    case 6:
      return ['m', 'n', 'o'];
    case 7:
      return ['p', 'q', 'r', 's'];
    case 8:
      return ['t', 'u', 'v'];
    case 9:
      return ['w', 'x', 'y', 'z'];
  }
}

function printArray(buffer: string[]) {
  console.log(buffer);
}

printWords([2, 3, 4]);
