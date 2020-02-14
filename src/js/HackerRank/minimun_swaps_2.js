// https://www.hackerrank.com/challenges/minimum-swaps-2/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays
// 排序过的数组，index, value是一一对应的，而且 value = index + 1, 如果在原数组里，某个元素处于对的位置，那么它一定不会参与互换
// 所以通过遍历原数组，发现index value对不上就把正确的value换过来，这样会出现：
// 1.一个元素位置对了
// 2.两个元素位置都对了
// 所以遍历完之后，这个数组就被排好序了
export function minimumSwaps(arr) {
  return arr.reduce((swaps, value, index) => {
    if (value !== index + 1) {
      // 从 index 之后开始找，是因为 index 之前的元素都排好了，不用找了
      const rightIndex = arr.indexOf(index + 1, index);

      [arr[index], arr[rightIndex]] = [arr[rightIndex], arr[index]];

      return swaps + 1;
    }

    return swaps;
  }, 0);
}
