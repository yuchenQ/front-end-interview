// https://www.hackerrank.com/challenges/new-year-chaos/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays

// 1.任何一个元素最多只能往前移动两位，否则就有问题
// 2.找到每个元素被bribe了多少次：
// - 对于任意元素 a 之后的元素，它最牛逼的情况也就移动到 a 的前一位
// - a 从（q[i] -1）-1 移动到了到 i, 其中的所有元素都有可能bribe过a,
// - 但是最小次数的情况下，不会出现 4 bribe 3, 3 再 bribe 回去的情况，3，4因为没有变化
// - 所以只需要找其中原本位置在 a 之后的元素就可以了
export function minimumBribes(q) {
  let times = 0;
  for (let i = 0; i < q.length; i++) {
    if (q[i] - 1 - i > 2) return 'Too chaotic';

    for (let j = Math.max(0, q[i] - 1 - 1); j < i; j++) {
      if (q[j] > q[i]) times += 1;
    }
  }

  return times;
}
