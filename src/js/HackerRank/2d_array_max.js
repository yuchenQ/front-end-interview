// https://www.hackerrank.com/challenges/2d-array/problem?filter=javascript&filter_on=language&h_l=interview&page=1&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays

export function hourglassSum(arr) {
  let total = -63;

  for (let y = 0; y < 4; y++) {
    for (let x = 0; x < 4; x++) {
      let sum = 0;

      sum += arr[y][x] + arr[y][x + 1] + arr[y][x + 2];

      sum += arr[y + 1][x + 1];
      sum += arr[y + 2][x] + arr[y + 2][x + 1] + arr[y + 2][x + 2];

      total = sum > total ? sum : total;
    }
  }

  return total;
}
