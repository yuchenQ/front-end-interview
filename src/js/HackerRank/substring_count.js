// https://www.hackerrank.com/challenges/special-palindrome-again/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=strings
// 对于每个元素，都有可能出现两种情况：
// 1. 它是一串连续字符(aaa...)的第一个元素
// 2. 它是一串连续字符(a...aba...a)的中间那个b
export function substrCount(n, s) {
  let count = n;

  for (let i = 0; i < s.length; i++) {
    let nextIndex = i;

    while (s[i] === s[nextIndex + 1]) nextIndex += 1;

    if (nextIndex !== i) {
      const length = nextIndex - i;

      count += (length * (length + 1)) / 2; // count(a, n) = count(a, n-1) + n

      i = nextIndex;
    } else {
      let step = 1;
      // 中间元素两边是否相同，除了中间元素外，其他元素是否相同(通过看右侧是否相同就行)
      while (s[i - step] === s[i + step] && s[i + step] === s[i + 1]) {
        step += 1;
        count += 1;
      }
    }
  }

  return count;
}
