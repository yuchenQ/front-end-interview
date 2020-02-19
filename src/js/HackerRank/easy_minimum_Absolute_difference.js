// https://www.hackerrank.com/challenges/minimum-absolute-difference-in-an-array/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=greedy-algorithms

export function minimumAbsoluteDifference(arr) {
  let miniDiff;

  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    const absDiff = Math.abs(arr[i] - arr[i + 1]);

    if (absDiff === 0) return 0;

    if (!miniDiff || absDiff < miniDiff) miniDiff = absDiff;
  }

  return miniDiff;
}
