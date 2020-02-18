// https://github.com/azl397985856/leetcode/blob/master/problems/53.maximum-sum-subarray-cn.md
// 暴力算法，遍历两次
export function maximumSubarrayBrutal(nums) {
  let max = -Number.MAX_VALUE;
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    sum = 0;
    for (let j = i; j < nums.length; j++) {
      sum += nums[j];
      if (sum > max) {
        max = sum;
      }
    }
  }

  return max;
}

// 假设从i, j 是最大的子串，s(i, j) = S(j) - S(i - 1)
// 所以实际上我们只需要遍历一次计算出所有的 S(i), 其中 i = 0,1,2....,n-1。
// 然后我们再减去之前的 S(k), 其中 k = 0,1,2....,i-1，中的最小值即可
export function maximumSubarrayPrefix(nums) {
  let max = nums[0];
  let min = 0;
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];

    if (max < sum - min) max = sum - min;

    if (sum < min) {
      min = sum;
    }
  }

  return max;
}

// DP
// 我们也可以利用局部最优和全局最优的思想来解决这个问题：
// 基本思路是这样的，在每一步，我们维护两个变量，
// 一个是全局最优，就是到当前元素为止最优的解，
// 一个是局部最优，就是必须包含当前元素的最优的解
// 接下来说说动态规划的递推式（这是动态规划最重要的步骤，递归式出来了，基本上代码框架也就出来了）
// 假设我们已知第i步的global[i]（全局最优）和local[i]（局部最优），
// 那么第i+1步的表达式是：local[i+1]=max(A[i], local[i]+A[i])，
// 就是局部最优是一定要包含当前元素，
// 所以不然就是上一步的局部最优local[i]+当前元素A[i]（因为local[i]一定包含第i个元素，所以不违反条件），
// 但是如果local[i]是负的，那么加上他就不如不需要的，所以不然就是直接用A[i]；
// global[i+1]=max(local[i+1],global[i])，
// 有了当前一步的局部最优，那么全局最优就是当前的局部最优或者还是原来的全局最优
// 所有情况都会被涵盖进来，因为最优的解如果不包含当前元素，那么前面会被维护在全局最优里面，如果包含当前元素，那么就是这个局部最优
export function maximumSubarrayDP(nums) {
  let max = nums[0];

  for (let i = 1; i < nums.length; i++) {
    nums[i] = Math.max(0, nums[i - 1]) + nums[i];

    if (nums[i] > max) max = nums[i];
  }

  return max;
}
