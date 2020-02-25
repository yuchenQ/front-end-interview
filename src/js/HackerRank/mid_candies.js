// https://www.hackerrank.com/challenges/candies/problem?filter=javascript&filter_on=language&h_l=interview&page=1&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dynamic-programming

export function candies(n, arr) {
  const candy = new Array(n).fill(1);

  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] < arr[i]) {
      candy[i] = candy[i - 1] + 1;
    }
  }

  for (let i = arr.length - 2; i >= 0; i--) {
    if (arr[i] > arr[i + 1] && candy[i] <= candy[i + 1]) {
      candy[i] = candy[i + 1] + 1;
    }
  }

  return candy.reduce((sum, amount) => sum + amount, 0);
}
