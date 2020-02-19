// https://www.hackerrank.com/challenges/greedy-florist/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=greedy-algorithms&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen
// 如何贪婪：尽量到大的在前面的轮次就先拿掉，因为大的乘起来数字更大，小的放在后面拿，因为小的乘起来数字更小
// turn 指的是现在是第几轮（所有人都买走了一朵，为一轮）
// rest 指的是在这一轮里，还有哪些人没买花
export function getMinimumCost(k, c) {
  c.sort((a, b) => b - a);

  let turn = 0;
  let sum = 0;

  for (let i = 0, rest = k; i < c.length; i++, rest--) {
    if (rest < 1) {
      turn += 1;
      rest = k;
    }

    sum += (turn + 1) * c[i];
  }

  return sum;
}
