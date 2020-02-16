// https://www.hackerrank.com/challenges/ctci-bubble-sort/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=sorting

export function countSwaps(a) {
  let count = 0;
  const { length } = a;

  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - 1; j++) {
      if (a[j] > a[j + 1]) {
        count += 1;
        [a[j], a[j + 1]] = [a[j + 1], a[j]];
      }
    }
  }

  return `Array is sorted in ${count} swaps.\nFirst Element: ${a[0]}\nLast Element: ${
    a[length - 1]
  }`;
}
