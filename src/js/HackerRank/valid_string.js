// https://www.hackerrank.com/challenges/sherlock-and-valid-string/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=strings

export function isValid(s) {
  function removeDuplicated(iterator) {
    return Array.from(new Set(iterator));
  }

  const dict = new Map();

  [...s].forEach(char => {
    if (dict.has(char)) {
      dict.set(char, dict.get(char) + 1);
    } else {
      dict.set(char, 1);
    }
  });

  if (removeDuplicated(dict.values()).length === 1) {
    return 'YES';
  }

  const frequencies = [...dict.values()].sort((a, b) => a - b);

  const [first, second] = frequencies;
  const [last, secondLast] = [...frequencies.reverse()];

  if (
    removeDuplicated(dict.values()).length === 2 &&
    (last - secondLast === 1 || (first === 1 && second !== 1))
  ) {
    return 'YES';
  }

  return 'NO';
}
