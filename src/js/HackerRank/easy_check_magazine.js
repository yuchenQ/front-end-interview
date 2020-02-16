/* eslint-disable no-unused-expressions */
// https://www.hackerrank.com/challenges/ctci-ransom-note/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dictionaries-hashmaps

export function checkMagazine(magazine, note) {
  const dict = new Map();

  magazine.forEach(word => {
    dict.has(word) ? dict.set(word, dict.get(word) + 1) : dict.set(word, 1);
  });

  for (let i = 0; i < note.length; i++) {
    if (!dict.has(note[i])) {
      return 'No';
    }

    if (dict.get(note[i]) === 0) {
      return 'No';
    }

    dict.set(note[i], dict.get(note[i]) - 1);
  }

  return 'Yes';
}
