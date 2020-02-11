// https://www.hackerrank.com/challenges/minimum-swaps-2/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays
// 排序过的数组，index, value是一一对应的，如果在原数组里，某个元素处于对的位置，那么它一定不会参与互换
// 所以通过遍历原数组，发现index value对不上就把正确的value换过来，这样会出现：
// 1.一个元素位置对了
// 2.两个元素位置都对了
// 所以遍历完之后，这个数组就被排好序了
export function minimumSwaps(arr) {
  const sortedArray = arr.slice().sort((a, b) => a - b);
  const indexes = new Map();

  arr.forEach((v, i) => indexes.set(v, i));

  let swaps = 0;

  arr.forEach((v, i) => {
    if (v !== sortedArray[i]) {
      swaps++;
      arr[indexes.get(sortedArray[i])] = v;
      arr[i] = sortedArray[i];
      indexes.set(v, indexes.get(sortedArray[i]));
    }
  });

  return swaps;
}
