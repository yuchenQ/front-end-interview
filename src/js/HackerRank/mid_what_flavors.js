// https://www.hackerrank.com/challenges/ctci-ice-cream-parlor/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=search

// 为了对运行时间复杂度进行优化，我们可以使用哈希表。
// 一个简单的实现使用了两次迭代。在第一次迭代中，我们将每个元素的值和它的索引添加到表中。
// 然后，在第二次迭代中，我们将检查每个元素所对应的目标元素
// target - nums[i] 是否存在于表中。注意，该目标元素不能是 nums[i] 本身！
export const whatFlavorsTwoHash = function(nums, target) {
  let result;
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], i);
  }

  for (let j = 0; j < nums.length; j++) {
    const complement = target - nums[j];

    if (map.has(complement) && map.get(complement) !== j) {
      result = [j, map.get(complement)];
    }
  }

  return result;
};

// 其实我们可以通过一遍哈希表完成查找，
// 在进行迭代并将元素插入到表中的同时，
// 我们还会回过头来检查表中是否已经存在当前元素所对应的目标元素。
// 如果它存在，那我们已经找到了对应解，并立即将其返回。
export function whatFlavorsOneHash(cost, money) {
  let result;
  const map = new Map();

  for (let i = 0; i < cost.length; i++) {
    const complement = money - cost[i];

    if (map.has(complement)) {
      result = [map.get(complement), i + 1];
    }
    map.set(cost[i], i + 1);
  }

  return result;
}
