# JavaScript 面试问题

## 1. 请讲一下你对闭包的认识

### 一句话解释

能够读取其他函数内部变量的函数。

### 稍全面的回答

1. 在js中变量的作用域属于函数作用域, 在函数执行完后,作用域就会被清理,内存也会随之被回收；
2. 但是由于闭包函数是建立在函数内部的子函数, 由于其可访问上级作用域,即使上级函数执行完, 作用域也不会随之销毁；
3. 这时的子函数(也就是闭包),便拥有了访问上级作用域中变量的权限,即使上级函数执行完后作用域内的值也不会被销毁。

### 这里涉及到对函数作用域的认识

+ js变量分为: 全局变量和局部变量;
+ 函数内部可以直接读取全局变量,而在函数外部自然无法读取函数内的局部变量

### 闭包解决了什么问题

+ 可以读取函数内部的变量
+ 让这些变量的值始终保持在内存中。不会在函数调用后被清除

### 例子

```js
function addCounter() {
   let counter = 0
   const myFunction = function () {
     counter = counter + 1
     return counter
   }
   return myFunction
 }
 const increment = addCounter()
 const c1 = increment()
 const c2 = increment()
 const c3 = increment()
 console.log('increment:', c1, c2, c3);
 // increment: 1 2 3
```

在这段代码中increment实际上就是闭包函数myFunction, 它一共运行了三次，第一次的值是1，第二次的值是2，第三次的值是3。这证明了，函数addCounter中的局部变量counter一直保存在内存中，并没有在addCounter调用后被自动清除

### 闭包的应用

#### 1. 老掉牙的取正确值问题

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

#### 2. 使用闭包模拟私有变量

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

### 闭包的缺点

1. 由于闭包会是的函数中的变量都被保存到内存中,滥用闭包很容易造成内存消耗过大,导致网页性能问题。解决方法是在退出函数之前，将不再使用的局部变量全部删除。
2. 闭包可以使得函数内部的值可以在函数外部进行修改。如果你把父函数当作对象（object）使用，把闭包当作它的公用方法（Public Method），把内部变量当作它的私有属性（private value），这时一定要小心，不要随便改变父函数内部变量的值
