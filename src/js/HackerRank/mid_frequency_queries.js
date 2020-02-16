/* eslint-disable default-case */
/* eslint-disable no-unused-expressions */
// https://www.hackerrank.com/challenges/frequency-queries/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dictionaries-hashmaps
// 使用两个map: 第一个"map" 用来记录"数字-频率"； 第二个"freq" 用来记录"频率-次数"；
// 添加: 数字的频率 + 1； 旧的频率的次数 - 1； 新的频率的次数 + 1；
// 删除: 数字的频率 - 1； 旧的频率的次数 - 1； 新的频率的次数 + 1；
// 查询: 看看freq里面 你想要的频率 的次数是不是大于1

export function freqQuery(queries) {
  const map = new Map();
  const freq = new Map();

  return queries.reduce((result, [command, target]) => {
    if (command === 1) {
      const oldFreq = map.get(target);
      let newFreq;

      // 没有旧频率也就没有旧频率的次数
      if (!oldFreq) {
        newFreq = 1;

        freq.has(1) ? freq.set(1, freq.get(1) + 1) : freq.set(1, 1);
      } else {
        newFreq = oldFreq + 1;

        freq.set(oldFreq, freq.get(oldFreq) - 1); // 旧频率的次数 - 1
        freq.has(newFreq) ? freq.set(newFreq, freq.get(newFreq) + 1) : freq.set(newFreq, 1); // 新频率的次数 + 1
      }

      map.set(target, newFreq);

      return result;
    }

    if (command === 2) {
      // 看看能不能减
      if (map.has(target) && map.get(target) >= 1) {
        const oldFreq = map.get(target);
        const newFreq = oldFreq - 1;

        freq.set(oldFreq, freq.get(oldFreq) - 1); // 旧频率的次数 - 1
        freq.set(newFreq, freq.get(newFreq) + 1); // 新频率的次数 + 1

        map.set(target, newFreq);
      }

      return result;
    }

    freq.get(target) > 0 ? result.push(1) : result.push(0);

    return result;
  }, []);
}
