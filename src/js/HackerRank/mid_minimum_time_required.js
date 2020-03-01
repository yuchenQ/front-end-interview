// https://www.hackerrank.com/challenges/minimum-time-required/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=search

export function minTime(machines, goal) {
  const getSum = (arr, d) => arr.reduce((total, machine) => total + Math.floor(d / machine), 0);

  const min = Math.min(...machines);
  const max = Math.max(...machines);

  let minDay = Math.ceil(goal / machines.length) * min;
  let maxDay = Math.ceil(goal / machines.length) * max;

  while (minDay < maxDay) {
    const day = Math.floor((maxDay + minDay) / 2);
    const sum = getSum(machines, day);

    if (sum >= goal) {
      maxDay = day;
    } else {
      minDay = day + 1;
    }
  }

  return minDay;
}
