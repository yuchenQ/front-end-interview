// https://www.hackerrank.com/challenges/sock-merchant/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup

export function sockMerchant(n, ar) {
  let previous = '';

  return ar
    .sort((a, b) => a - b)
    .reduce((count, current) => {
      if (previous !== current) {
        previous = current;
      } else {
        previous = '';
        count += 1;
      }

      return count;
    }, 0);
}
