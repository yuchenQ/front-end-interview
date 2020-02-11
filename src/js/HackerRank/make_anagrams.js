// https://www.hackerrank.com/challenges/ctci-making-anagrams/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=strings

// 需要删除的部分: a有b没有，b有a没有，ab频率不一样的部分
// 创造一个字典，先注册a的chars, 有就是累加。。。 再遍历b，有就减去不然就是负数
// 最后调用 map.values().reduce() 把不是0的加起来（绝对值）

export function makeAnagram(a, b) {
  const map = new Map();

  a.split('').forEach(char =>
    map.has(char) ? map.set(char, map.get(char) + 1) : map.set(char, 1)
  );

  b.split('').forEach(char =>
    map.has(char) ? map.set(char, map.get(char) - 1) : map.set(char, -1)
  );

  return Array.from(map.values()).reduce((sum, value) => (sum += Math.abs(value)), 0);
}
