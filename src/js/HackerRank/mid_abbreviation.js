// https://www.hackerrank.com/challenges/abbr/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dynamic-programming
/*
     A B C
   1 0 0 0
d  1 0 0 0
a  1 1 0 0
B  0 0 1 0
c  0 0 1 1
d  0 0 1 1
*/
export function abbreviation(a, b) {
  function isUpperCase(char) {
    return char === char.toUpperCase();
  }

  const arrayOfA = [...a];
  const arrayOfb = [...b];
  const dp = new Array(a.length + 1);

  for (let i = 0; i < a.length + 1; i++) {
    dp[i] = new Array(b.length + 1);
  }

  dp[0][0] = true;
  let uppercase = false;

  for (let row = 1; row < a.length + 1; row++) {
    const i = row - 1;

    if (isUpperCase(arrayOfA[i]) || uppercase) {
      uppercase = true;
      dp[row][0] = false;
    } else {
      dp[row][0] = true;
    }
  }

  for (let row = 1; row < a.length + 1; row++) {
    const i = row - 1;

    for (let col = 1; col < b.length + 1; col++) {
      const j = col - 1;

      if (arrayOfA[i] === arrayOfb[j]) {
        dp[row][col] = dp[row - 1][col - 1];
      } else if (isUpperCase(arrayOfA[i])) {
        dp[row][col] = false;
      } else if (arrayOfA[i].toUpperCase() === arrayOfb[j]) {
        dp[row][col] = dp[row - 1][col - 1] || dp[row - 1][col];
      } else {
        dp[row][col] = dp[row - 1][col];
      }
    }
  }

  return dp[a.length][b.length] ? 'YES' : 'NO';
}
