// https://www.hackerrank.com/challenges/luck-balance/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=greedy-algorithms&h_r=next-challenge&h_v=zen

export function luckBalance(k, contests) {
  contests.sort(([luck1], [luck2]) => luck2 - luck1);

  let maxLuck = 0;

  for (let index = 0; index < contests.length; index++) {
    const [luck, imp] = contests[index];

    if (!imp) {
      maxLuck += luck;
    } else if (k >= 1) {
      maxLuck += luck;
      k -= 1;
    } else {
      maxLuck -= luck;
    }
  }

  return maxLuck;
}
