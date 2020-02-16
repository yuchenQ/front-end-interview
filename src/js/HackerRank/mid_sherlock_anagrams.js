/* eslint-disable no-unused-expressions */
// https://www.hackerrank.com/challenges/sherlock-and-anagrams/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dictionaries-hashmaps

export function sherlockAndAnagrams(s) {
  let count = 0;
  const arrayOfSubstr = [];

  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j < s.length + 1; j++) {
      arrayOfSubstr.push(s.slice(i, j));
    }
  }

  const dict = new Map();

  arrayOfSubstr.forEach(subString => {
    const sortedStr = subString
      .split('')
      .sort((a, b) => a.toLowerCase().localeCompare(b))
      .join('');

    if (dict.has(sortedStr)) {
      count += dict.get(sortedStr);

      dict.set(sortedStr, dict.get(sortedStr) + 1);
    } else {
      dict.set(sortedStr, 1);
    }
  });

  return count;
}
