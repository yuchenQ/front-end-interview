// https://www.hackerrank.com/challenges/counting-valleys/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup

export function countingValleys(n, s) {
  const arrayOfSteps = s.split('');
  let currentLevel = 0;

  return arrayOfSteps.reduce(function(sum, step) {
    currentLevel += { U: 1, D: -1 }[step];

    if (step === 'U' && currentLevel === 0) {
      sum += 1;
    }

    return sum;
  }, 0);
}
