/* eslint-disable prefer-rest-params */
/**
 * 节流函数
 * @param {Function} fn - 实际要执行的函数，对其进行节流处理
 * @param {Number} wait - 规定的执行时间间隔
 * @param {Object} option - 用于设置节流的函数的触发时机，
 *                        - 默认是{leading: true, trailing: true}，表示第一次触发监听事件马上执行，停止后最后也执行一次
 *                        - leading为false时，表示第一次触发不马上执行
 *                        - trailing为false时，表示最后停止触发后不执行
 * @return {Function} 返回经过节流处理后的函数
 */
// 在{leading: true, trailing: true}下，为大多数正常需求所用。在这种情况下，
// 条件①只有在第一次触发，以及后续超过规定间隔时间后的第一次触发，才会走到该流程下；其余都是在条件②下触发fn。
// 在{leading: false}下，都是在条件②下触发fn，走不到条件①下的。
// 在{trailing: false}下，都是在条件①下触发fn，走不到条件②下的。
export function throttle(fn, wait = 500, option = {}) {
  let timerId = null; // 用于记录定时器的id
  let lastTime = 0; // 上次触发fn的时间戳

  if (typeof fn !== 'function') {
    throw new Error('Param Error in throttle(): The first param should be a function!');
  }

  if (option.leading === false && option.trailing === false) {
    throw new Error("Param Error in throttle(): Cannot set both 'leading' and 'trailing' to true");
  }
  // 节流后的执行函数
  function throttled() {
    const now = +new Date();
    // 如果没有上次触发执行时间（即第一次运行），以及leading设置为false
    if (!lastTime && !option.leading) lastTime = now;

    const remainingTime = wait - (now - lastTime);

    if (remainingTime <= 0 || remainingTime > wait) {
      // 条件①：如果到达了规定的间隔时间或用户自己设定了系统时间导致的不合理时间差，则立刻执行一次触发函数
      fn.apply(this, arguments);
      lastTime = now;

      if (timerId) {
        clearTimeout(timerId);
        timerId = null;
      }
    } else if (!timerId && option.trailing) {
      // 条件②：如果未达到规定时间，以及要求停止后延迟执行
      timerId = setTimeout(() => {
        fn.apply(this, arguments);
        timerId = null;

        lastTime = option.leading ? +new Date() : 0;
      }, remainingTime);
    }
  }
  // 手动提前终止节流时间，恢复初始状态
  function cancel() {
    clearTimeout(timerId);
    timerId = null;
    lastTime = 0;
  }
  throttled.cancel = cancel;
  return throttled;
}
