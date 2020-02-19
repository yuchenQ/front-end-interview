// https://www.hackerrank.com/challenges/angry-children/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=greedy-algorithms

export function maxMin(k, arr) {
  let mini;

  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length - k + 1; i++) {
    const fairness = arr[i + k - 1] - arr[i];

    if (!mini || fairness < mini) {
      mini = fairness;
    }
  }

  return mini;
}
