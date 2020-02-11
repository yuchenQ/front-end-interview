// https://www.hackerrank.com/challenges/ctci-array-left-rotation/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays
// 拆分法：[1,2,3] 移动一次，是 [2,3].concat([1]), 以此类推
export function rotLeft(a, d) {
  if (d > a.length) d %= a.length;

  return a.slice(d).concat(a.slice(0, d));
}

// n > 0 to right; n < 0 to left
export function rotationElement(array, n) {
  if (Math.abs(n) > array.length) n %= array.length;

  return [...array.slice(-n), ...array.slice(0, -n)];
}

// another solution
export function rotate(array, n) {
  function move(direction) {
    switch (direction) {
      case 'left':
        array.push(array.shift());
        break;
      case 'right':
        array.unshift(array.pop());
        break;
      default:
        break;
    }
  }

  if (Math.abs(n) > array.length) n %= array.length;

  for (let i = 0; i < Math.abs(n); i++) {
    // eslint-disable-next-line no-unused-expressions
    n > 0 ? move('right') : move('left');
  }

  return array;
}
