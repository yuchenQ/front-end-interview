// https://www.hackerrank.com/challenges/mark-and-toys/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=sorting

export function maximumToys(prices, k) {
  let remain = k;

  return prices
    .slice()
    .sort((a, b) => a - b)
    .reduce((count, price) => {
      if (price <= remain) {
        count += 1;

        remain -= price;
      }

      return count;
    }, 0);
}
