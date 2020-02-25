// https://www.hackerrank.com/challenges/max-array-sum/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dynamic-programming
// from that point forward, the max of the next position is either:
// - the current value at that position
// - the max value found so far
// - the max value from 2 positions back plus the current value

export function maxSubsetSum(arr) {
  const dp = [arr[0], Math.max(arr[0], arr[1])];

  for (let i = 2; i < arr.length; i++) {
    dp[i] = Math.max(arr[i], dp[i - 2] + arr[i], dp[i - 1]);
  }

  return dp[arr.length - 1];
}

export function maxSubsetSumSpaceO1(arr) {
  let lastTwo = arr[0];
  let last = Math.max(arr[0], arr[1]);
  let current;

  for (let i = 2; i < arr.length; i++) {
    current = Math.max(arr[i], lastTwo + arr[i], last);
    lastTwo = last;
    last = current;
  }

  return current;
}
