// https://leetcode.com/problems/triangle/
// https://leetcode-cn.com/problems/triangle/
// 从下到上的方式，状态的定义就变成了 “最后一行元素到当前元素的最小路径和”，对于 [0][0] 这个元素来说，最后状态表示的就是我们的最终答案
/**
 * @param {number[][]} triangle
 * @return {number}
 */
export const minimumTotal = function(triangle) {
  for (let i = triangle.length - 2; i >= 0; i--) {
    for (let j = 0; j < triangle[i].length; j++) {
      triangle[i][j] = Math.min(triangle[i + 1][j], triangle[i + 1][j + 1]) + triangle[i][j];
    }
  }

  return triangle[0][0];
};
// 自底向上递归时，其实每次只会用到上一层数据，因此不需二维数组存储所有可能情况来一一比较
export const minimumTotalLessSpace = function(triangle) {
  const dp = new Array(triangle.length + 1).fill(0);

  for (let i = triangle.length - 1; i >= 0; i--) {
    for (let j = 0; j < triangle[i].length; j++) {
      dp[j] = Math.min(dp[j], dp[j + 1]) + triangle[i][j];
    }
  }
  return dp[0];
};
