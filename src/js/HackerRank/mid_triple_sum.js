// https://www.hackerrank.com/challenges/triple-sum/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=search
export function triplets(a, b, c) {
  const sortedA = Array.from(new Set(a.sort((x, y) => x - y)));
  const sortedB = Array.from(new Set(b.sort((x, y) => x - y)));
  const sortedC = Array.from(new Set(c.sort((x, y) => x - y)));

  let count = 0;
  let indexA = 0;
  let indexB = 0;
  let indexC = 0;

  while (indexB < sortedB.length) {
    while (indexA < sortedA.length && sortedA[indexA] <= sortedB[indexB]) {
      indexA++;
    }

    while (indexC < sortedC.length && sortedC[indexC] <= sortedB[indexB]) {
      indexC++;
    }

    count += indexA * indexC;
    indexB++;
  }

  return count;
}
