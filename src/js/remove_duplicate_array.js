// 时间复杂度:O(n^2)
export function distinctByForLoop(arr) {
  for (let i = 0, len = arr.length; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (arr[i] === arr[j]) {
        arr.splice(j, 1);
        // splice 会改变数组长度，所以要将数组长度 len 和下标 j 减一
        len--;
        j--;
      }
    }
  }
  return arr;
}

export function distinctByFilter(arr) {
  return arr.filter(function(item, index) {
    return index === arr.indexOf(item);
  });
}

export function distinctBySort(array) {
  const result = [];
  const sortedArray = array.concat().sort();

  let seen;

  for (let i = 0; i < sortedArray.length; i++) {
    if (!i || seen !== sortedArray[i]) {
      result.push(sortedArray[i]);
    }
    seen = sortedArray[i];
  }
  return result;
}

export function distinctBySet(array) {
  return Array.from(new Set(array));
}
// 可以简化: const distinctBySet = array => [...new Set(array)];
// 我们要考虑这个数组中是否有null、undefined、NaN、对象如果二者都出现，上面的所有数组去重方法并不是都是适用哦

// 但是Object 键值对去重， 可以全部去重
export function distinctByObject(array) {
  const obj = {};
  return array.filter(function(item) {
    return obj.hasOwnProperty(typeof item + item) ? false : (obj[typeof item + item] = true);
  });
}
