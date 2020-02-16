// https://www.hackerrank.com/challenges/common-child/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=strings

// 动态规划
// LCS(x,y,i,j)
// 	if x[i] = y[j]
// 		then C[i,j] ← LCS(x,y,i-1,j-1) + 1
// 	else C[i,j] ← max{ LCS(x,y,i-1,j), LCS(x,y,i,j-1) }
// 	return C[i,j]
// 因为 i,j 不能小于0，所以构建一个[i+1][j+1]的二维数组，arr[0][j] 和 arr[i][0] 都是 0
export function commonChild(s1, s2) {
  const arr = [Array(s2.length + 1).fill(0)];

  [...s1].forEach((v1, i) => {
    arr[i + 1] = [0];

    [...s2].forEach((v2, j) => {
      arr[i + 1][j + 1] = v1 === v2 ? arr[i][j] + 1 : Math.max(arr[i + 1][j], arr[i][j + 1]);
    });
  });

  return arr[s1.length][s2.length];
}
