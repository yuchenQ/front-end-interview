/* eslint-disable no-unused-expressions */
// https://www.hackerrank.com/challenges/count-triplets-1/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dictionaries-hashmaps

// 假设 a, b, c 满足 a * r = b; b * r = c;
// length 表示某个元素有多少个，prev 表示本元素和上一个元素能够产生多少组合
// 遍历到了一个新的c, 没有的话给它初始化一下
// 再去找b，看能不能找到, b is lastValue
// 如果找到b了， b.combineWithLast 已经记录了 ab 能产生多少组合
// 现在多了个c，新的c也可以和所有的a,b组成 triplet，所以 count = count + b.combineWithLast
// 然后再更新 b c 能组成多少组合，为 c * r 服务， 同样的，多了一个c, 它可以和所有的b组合，故c.combineWithLast = c.combineWithLast + b.length
// 最后就能找到有多少组合了
// 本题的核心思路在于，从triplet的最后一个元素的角度来看问题
export function countTriplets(arr, r) {
  const map = {};
  let count = 0;

  arr.forEach(thisValue => {
    if (!map[thisValue]) map[thisValue] = { length: 0, combineWithLast: 0 };

    const lastValue = map[thisValue / r];

    if (lastValue) {
      count += lastValue.combineWithLast;
      map[thisValue].combineWithLast += lastValue.length;
    }

    map[thisValue].length++;
  });

  return count;
}
