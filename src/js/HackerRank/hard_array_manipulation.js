// https://www.hackerrank.com/challenges/crush/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays

// 差分数组 : https://stackoverflow.com/questions/48162233/logic-used-behind-array-manipulation-of-hackerrank
export function arrayManipulation(n, queries) {
  const diffs = new Array(n + 1).fill(0);

  queries.forEach(query => {
    const [start, end, increment] = query;

    diffs[start - 1] += increment;

    diffs[end] -= increment;
  });

  return diffs.reduce(
    ({ total, max }, value) => {
      return {
        total: total + value,
        max: Math.max(max, total + value),
      };
    },
    {
      total: 0,
      max: 0,
    }
  ).max;
}
