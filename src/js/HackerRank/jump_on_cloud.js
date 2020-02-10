// https://www.hackerrank.com/challenges/jumping-on-the-clouds/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup

export function jumpingOnClouds(c) {
  let jumps = 0;
  for (let i = 0; i < c.length - 1; jumps++) {
    i += c[i + 2] === 0 ? 2 : 1;
  }

  return jumps;
}
