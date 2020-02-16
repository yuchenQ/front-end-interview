/* eslint-disable no-unused-expressions */
// https://www.hackerrank.com/challenges/two-strings/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dictionaries-hashmaps

export function twoStrings(s1, s2) {
  const dict = new Map();

  [...s1].forEach(char => {
    dict.has(char) ? dict.set(char, dict.get(char) + 1) : dict.set(char, 1);
  });

  const arrayOfS2 = [...s2];

  for (let i = 0; i < arrayOfS2.length; i++) {
    if (dict.has(arrayOfS2[i])) {
      return 'YES';
    }
  }

  return 'NO';
}
