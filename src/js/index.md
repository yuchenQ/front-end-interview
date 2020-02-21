# JavaScript 面试问题

## 2020/02/13

### 1. 请讲一下你对闭包的认识

#### 一句话解释

能够读取其他函数内部变量的函数。

#### 稍全面的回答

1. 在 js 中变量的作用域属于函数作用域, 在函数执行完后,作用域就会被清理,内存也会随之被回收；
2. 但是由于闭包函数是建立在函数内部的子函数, 由于其可访问上级作用域,即使上级函数执行完, 作用域也不会随之销毁；
3. 这时的子函数(也就是闭包),便拥有了访问上级作用域中变量的权限,即使上级函数执行完后作用域内的值也不会被销毁。

#### 这里涉及到对函数作用域的认识

- js 变量分为: 全局变量和局部变量;
- 函数内部可以直接读取全局变量,而在函数外部自然无法读取函数内的局部变量

#### 闭包解决了什么问题

- 可以读取函数内部的变量
- 让这些变量的值始终保持在内存中。不会在函数调用后被清除

#### 例子

```js
function addCounter() {
  let counter = 0;
  const myFunction = function() {
    counter = counter + 1;
    return counter;
  };
  return myFunction;
}
const increment = addCounter();
const c1 = increment();
const c2 = increment();
const c3 = increment();
console.log('increment:', c1, c2, c3);
// increment: 1 2 3
```

在这段代码中 increment 实际上就是闭包函数 myFunction, 它一共运行了三次，第一次的值是 1，第二次的值是 2，第三次的值是 3。这证明了，函数 addCounter 中的局部变量 counter 一直保存在内存中，并没有在 addCounter 调用后被自动清除

#### 闭包的应用

##### 1. 老掉牙的取正确值问题

```js
for (let i = 0; i < 10; i++) {
  (j => {
    setTimeout(function() {
      console.log(j); // 1-10
    }, 1000);
  })(i);
}
// 1 2 3 4 5 6 7 8 9
// 声明了10个自执行函数，保存当时的值到内部
```

##### 2. 使用闭包模拟私有变量

```js
const counter = (function() {
  let privateCounter = 0;

  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment() {
      changeBy(1);
    },
    decrement() {
      changeBy(-1);
    },
    value() {
      return privateCounter;
    },
  };
})();
counter.value(); // 0
counter.increment(); // 1
counter.increment(); // 2
counter.decrement(); // 1
```

#### 闭包的缺点

1. 由于闭包会是的函数中的变量都被保存到内存中,滥用闭包很容易造成内存消耗过大,导致网页性能问题。解决方法是在退出函数之前，将不再使用的局部变量全部删除。
2. 闭包可以使得函数内部的值可以在函数外部进行修改。如果你把父函数当作对象（object）使用，把闭包当作它的公用方法（Public Method），把内部变量当作它的私有属性（private value），这时一定要小心，不要随便改变父函数内部变量的值

### 2. for...in 和 for...of 的区别

1. for...of 是 ES6 新引入的特性，修复了 ES5 引入的 for...in 的不足
2. for...in 循环出的是 key，for...of 循环出的是 value
3. for...of 不能循环普通的对象，需要通过和 Object.keys()搭配使用
4. 推荐在循环对象属性的时候，使用 for...in,在遍历数组的时候的时候使用 for...of

### 3. new 一个对象, 这个过程中发生了什么

1. 创建一个新对象，如：var obj = {};
2. 新对象的*proto*属性指向构造函数的原型对象。
3. 将构造函数的作用域赋值给新对象。（也所以 this 对象指向新对象）
4. 执行构造函数内部的代码，将属性添加给 obj 中的 this 对象。
5. 返回新对象 obj

### 4. js 的防抖和节流是什么

**防抖**: 在事件被触发 n 秒后再执行回调，如果在这 n 秒内又被触发，则重新计时

```js
function debounce(fn, wait) {
  var timeout = null;

  return function() {
    if (timeout !== null) clearTimeout(timeout);
    timeout = setTimeout(fn, wait);
  };
}
// 处理函数
function handle() {
  console.log(Math.random());
}
//滚动事件
window.addEventListener('scroll', debounce(handle, 2000));
```

**节流**: 就是指连续触发事件但是在 n 秒中只执行一次函数。节流会稀释函数的执行频率

```js
function throttle(func, delay) {
  var prev = Date.now();

  return function() {
    var context = this;
    var args = arguments;

    var now = Date.now();

    if (now - prev >= delay) {
      func.apply(context, args);
      prev = Date.now();
    }
  };
}

function handle() {
  console.log(Math.random());
}
window.addEventListener('scroll', throttle(handle, 2000));
```

**区别：**
函数节流不管事件触发有多频繁，都会保证在规定时间内一定会执行一次真正的事件处理函数，而函数防抖只是在最后一次事件后才触发一次函数。 比如在页面的无限加载场景下，我们需要用户在滚动页面时，每隔一段时间发一次 Ajax 请求，而不是在用户停下滚动页面操作时才去请求数据。这样的场景，就适合用节流技术来实现

### 5. js 中 call,apply,bind 之间的关系

#### bind,apply,call 三者都可以用来改变 this 的指向

#### apply 和 call

- 二者都是 Function 对象的方法, 每个函数都能调用
- 二者的第一个参数都是你要指定的执行上下文
- apply 和 call 的区别是: call 方法接受的是若干个参数列表，而 apply 接收的是一个包含多个参数的数组。

#### bind 与 apply、call 区别

我们发现 bind()方法还需要调用一次; 是由于 bind()方法创建一个新的函数,我们必须手动去调用

#### 总结 bind, apply, call 的共同和不同点

- 三者都可以用来改变 this 的指向
- 三者第一个参数都是 this 要指向的对象，也就是想指定的上下文，上下文就是指调用函数的那个对象。（点前的那个对象，没有就是全局 window）
- 三者都可以传参，但是 apply 是数组，而 call 是有顺序的传入
- bind 是返回对应函数，便于稍后调用；apply 、call 则是立即执行

## 2020/2/18

### 表达式和语句有什么区别？如何把语句转换为表达式

- 简单的说来，表达式(Expression)是语句(Statement)的子集，表达式一定会返回一个值，而语句不会。
- 比如定义变量、返回语句都属于语句，而逻辑判断、方法调用、赋值都属于表达式。
- 支持语句的地方都支持表达式，而只支持表达式的地方不支持语句

可以使用**IIFE**将语句转为表达式

```js
const foo = (() => {
  return 'foo';
})();
```

### js 判断一个 object 对象是否为空

#### 1.最常见的思路，for...in... 遍历属性，为真则为“非空数组”；否则为“空数组”

```js
for (var i in obj) {
  // 如果不为空，则会执行到这一步，返回true
  return true;
}
return false; // 如果为空,返回false
```

#### 2.通过 JSON 自带的 stringify() 方法来判断

JSON.stringify() 方法用于将 JavaScript 值转换为 JSON 字符串。

```js
if (JSON.stringify(data) === '{}') {
  return false; // 如果为空,返回false
}
return true; // 如果不为空，则会执行到这一步，返回true
```

这里需要注意为什么不用 toString()，因为它返回的不是我们需要的。

```js
var a = {};
a.toString(); // "[object Object]"
```

#### 3.ES6 新增的方法 Object.keys()

Object.keys() 方法会返回一个由一个给定对象的自身可枚举属性组成的数组。如果我们的对象为空，他会返回一个空数组，如下：

```js
var a = {};
Object.keys(a); // []
```

我们可以依靠 Object.keys()这个方法通过判断它的长度来知道它是否为空。

```js
if (Object.keys(object).length === 0) {
  return false; // 如果为空,返回false
}
return true; // 如果不为空，则会执行到这一步，返回true
```

## 2020/2/19

### 1. 写一个方法去掉字符串中的空格

```js
str.replace(/\s*/g, ''); //去除字符串内所有的空格

str.replace(/^\s*|\s*$/g, ''); //去除字符串内两头的空格

str.replace(/^\s*/, ''); //去除字符串内左侧的空格

str.replace(/(\s*$)/g, ''); //去除字符串内右侧的空格
```

## 2020/2/21

### 1. 变量提升

JavaScript 引擎的工作方式是，先解析代码，获取所有被声明的变量，然后再一行一行地运行。这造成的结果，就是所有的变量的声明语句，都会被提升到代码的头部，这就叫做变量提升（hoisting）

### 2. ES6 模块与 CommonJS 模块有什么区别

1. CommonJS 是对模块的浅拷贝，ES6 Module 是对模块的引用,即 ES6 Module 只存只读，不能改变其值，具体点就是指针指向不能变，类似 const
2. import 的接口是 read-only（只读状态），不能修改其变量值。 即不能修改其变量的指针指向，但可以改变变量内部指针指向；可以对 commonJS 对重新赋值（改变指针指向），但是对 ES6 Module 赋值会编译报错

共同点：CommonJS 和 ES6 Module 都可以对引入的对象进行赋值，即对对象内部属性的值进行改变

### 3. null 与 undefined 的区别是什么

- null 表示为空，代表此处不应该有值的存在，一个对象可以是 null，代表是个空对象，而 null 本身也是对象。
- undefined 表示『不存在』，JavaScript 是一门动态类型语言，成员除了表示存在的空值外，还有可能根本就不存在（因为存不存在只在运行期才知道），这就是 undefined 的意义所在
