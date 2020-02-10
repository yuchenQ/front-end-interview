// https://www.hackerrank.com/challenges/sock-merchant/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup

export function sockMerchant(n, ar) {
  const sortedArray = ar.sort((a, b) => a - b);

  let previous;

  return sortedArray.reduce(function(count, current) {
    if (previous !== current) {
      previous = current;
    } else {
      previous = '';
    }

    return count;
  }, 0);
}
