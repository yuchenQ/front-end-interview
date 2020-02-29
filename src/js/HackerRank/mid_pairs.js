// https://www.hackerrank.com/challenges/pairs/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=search
export function pairs(k, arr) {
  let count = 0;
  const map = new Map();

  for (let index = 0; index < arr.length; index++) {
    const value = arr[index];

    if (map.has(value - k)) {
      count += 1;
    }

    if (map.has(value + k)) {
      count += 1;
    }

    map.set(value, index);
  }

  return count;
}

export function pairsWithDoubleP(k, arr) {
  const sortedArr = arr.sort((a, b) => a - b);

  let count = 0;
  let j = 0;

  for (let i = 1; i < sortedArr.length; ) {
    const diff = sortedArr[i] - sortedArr[j];

    if (diff === k) {
      count++;
      j++;
    } else if (diff > k) {
      i++;
    } else if (diff < k) {
      j++;
    }
  }

  return count;
}
