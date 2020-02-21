# css 面经总结

## 之前的面试题

### 1. BFC 块级格式化上下文

> Block formatting context 直译为"块级格式化上下文"。它是一个独立的渲染区域，只有 Block-level box 参与， 它规定了内部的 Block-level Box 如何布局，并且与这个区域外部毫不相干。通俗地讲，BFC 是一个容器，用于管理块级元素

#### BFC 布局规则

1. 内部的 Box 会在垂直方向，一个接一个地放置(即块级元素独占一行)。
2. BFC 的区域不会与 float box 重叠(利用这点可以实现自适应两栏布局)。
3. 内部的 Box 垂直方向的距离由 margin 决定。属于同一个 BFC 的两个相邻 Box 的 margin 会发生重叠(margin 重叠三个条件:同属于一个 BFC;相邻;块级元素)。
4. 计算 BFC 的高度时，浮动元素也参与计算。（清除浮动 haslayout）
5. BFC 就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。反之也如此。

##### 特性 1：BFC 会阻止垂直外边距折叠

##### 特性 2：BFC 不会重叠浮动元素

##### 特性 3：BFC 可以包含浮动----清除浮动

---

### 2. 居中布局

- 水平居中

1. 行内元素: text-align:center
2. 块级元素: margin:0 auto
3. 绝对定位和移动: absolute + transform
4. 绝对定位和负边距: absolute + margin
5. flex 布局: flex + justify-content:center

- 垂直居中

1. 子元素为单行文本: line-height:height
2. absolute + transform
3. flex + align-items:center
4. table: display:table-cell; vertical-align: middle
5. 利用 position 和 top 和负 margin

---

### 3. 用纯 CSS 创建一个三角形的原理是什么

**Step1:** 写一个我们最熟悉的 border 应用

```css
.box {
  width: 100px;
  height: 100px;
  border: 3px solid;
  border-color: #1b93fb #1bfb24 #efad48 #ef4848;
}
```

**Step2:** 接下来,我们将 border 值增大, 很容易发现, border 渲染并不是正方形, 而是梯形的

**Step3:** 在增大 border 的基础下, 此时我们将盒子宽高变成 0, 会发现四个三角形拼合成的矩形呈现在我们眼前,那如果我们只想要一个三角形, 我们可以将其他三个设为不可见;

**Step4:** 当然我们也可以采用逆向思维来写这个效果, 就是先将所有边框设为透明, 然后需要哪边再对其设置颜色, 效果是一样的

```css
.box {
  width: 0px;
  height: 0px;
  border: 50px solid transparent;
  border-left: 50px solid #ef4848;
}
```

---

### 4. 实现 0.5px 的细线

```css
.line {
  position: relative;
}
.line:after {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 1px;
  background-color: #000000;
  -webkit-transform: scaleY(0.5);
  transform: scaleY(0.5);
}
```

---

### 5. link 与 @import 的区别

### 从属关系区别

> @import 是 CSS 提供的语法规则，只有导入样式表的作用；link 是 HTML 提供的标签，不仅可以加载 CSS 文件，还可以定义 RSS、rel 连接属性等

### 加载顺序区别

> 加载页面时，link 标签引入的 CSS 被同时加载；@import 引入的 CSS 将在页面加载完毕后被加载。

### 兼容性区别

> @import 是 CSS2.1 才有的语法，故只可在 IE5+ 才能识别；link 标签作为 HTML 元素，不存在兼容性问题。

### DOM 可控性区别

> 可以通过 JS 操作 DOM ，插入 link 标签来改变样式；由于 DOM 方法是基于文档的，无法使用@import 的方式插入样式

## 2020/02/13

### 1. 对于 initial、inherit、unset 的理解

- inherit: Get the property from the parent element.
- initial: The default value for the property (the browser default).
- unset: Acts as either inherit or initial. It’ll act as inherit if the parent has a value that matches, or else it will act as initial.

### 2. CSS 盒子模型

（1）有两种， IE 盒子模型、W3C 盒子模型；

（2）盒模型： 内容(content)、填充(padding)、边界(margin)、 边框(border)；

（3）区 别： IE 的 content 部分把 border 和 padding 计算了进去;

### 3. CSS 隐藏元素的几种方法（至少说出三种）

- Opacity: 元素本身依然占据它自己的位置并对网页的布局起作用。它也将响应用户交互;
- Visibility: 与 opacity 唯一不同的是它不会响应任何用户交互。此外，元素在读屏软件中也会被隐藏;
- Display: display 设为 none 任何对该元素直接打用户交互操作都不可能生效。此外，读屏软件也不会读到元素的内容。这种方式产生的效果就像元素完全不存在;
- Position: 不会影响布局，能让元素保持可以操作;

### 4. What is the difference between '+' and '~' sibling selectors

#### The General Sibling Selector ~ selects all elements that are siblings of a specified element

The following example selects all `<p>` elements that are siblings of `<div>` elements:

```css
div ~ p {
  background-color: blue;
}
```

#### The Adjacent Sibling Selector + selects all elements that are the adjacent siblings of a specified element

The following example will select all `<p>` elements that are placed immediately after `<div>` elements:

```css
div + p {
  background-color: red;
}
```

## 2020/2/19

### 1. 在页面上隐藏元素的方法有哪些

#### 占位

```css
visibility: hidden;
margin-left: -100%;
opacity: 0;
transform: scale(0);
```

#### 不占位

```css
display: none;
width: 0;
height: 0;
overflow: hidden;
```

#### 仅对块内文本元素

```css
text-indent: -9999px;
font-size: 0;
```

### 2. 介绍下重绘和回流（Repaint & Reflow），以及如何进行优化

#### 2.1 浏览器渲染机制

- 浏览器采用流式布局模型（Flow Based Layout）
- 浏览器会把 HTML 解析成 DOM，把 CSS 解析成 CSSOM，DOM 和 CSSOM 合并就产生了渲染树（Render Tree）。
- 有了 RenderTree，我们就知道了所有节点的样式，然后计算他们在页面上的大小和位置，最后把节点绘制到页面上。
- 由于浏览器使用流式布局，对 Render Tree 的计算通常只需要遍历一次就可以完成
- 但 table 及其内部元素除外，他们可能需要多次计算，通常要花 3 倍于同等元素的时间，这也是为什么要避免使用 table 布局的原因之一

#### 2.2 回流 (Reflow)

当 Render Tree 中部分或全部元素的尺寸、结构、或某些属性发生改变时，浏览器重新渲染部分或全部文档的过程称为回流。

##### 会导致回流的操作

- 页面首次渲染
- 浏览器窗口大小发生改变
- 元素尺寸或位置发生改变
- 元素内容变化（文字数量或图片大小等等）
- 元素字体大小变化
- 添加或者删除可见的 DOM 元素
- 激活 CSS 伪类（例如`:hover`）
- 查询某些属性或调用某些方法

##### 大部分的回流将导致页面的重新渲染

#### 2.3 重绘 (Repaint)

当页面中元素样式的改变并不影响它在文档流中的位置时（例如：color、background-color、visibility 等），浏览器会将新样式赋予给元素并重新绘制它，这个过程称为重绘

#### 回流必定会发生重绘，重绘不一定会引发回流

#### 现代浏览器会对频繁的回流或重绘操作进行优化

浏览器会维护一个队列，把所有引起回流和重绘的操作放入队列中，如果队列中的任务数量或者时间间隔达到一个阈值的，浏览器就会将队列清空，进行一次批处理，这样可以把多次回流和重绘变成一次。

但当你获取布局信息的时候，队列中可能有会影响这些属性或方法返回值的操作，即使没有，浏览器也会强制清空队列，触发回流与重绘来确保返回正确的值。

#### 2.4 如何优化

#### CSS

- 避免使用 table 布局。
- 尽可能在 DOM 树的最末端改变 class。
- 避免设置多层内联样式（例如： `div > a > span`）。
- 将动画效果应用到 position 属性为 absolute 或 fixed 的元素上。
- 避免使用 CSS 表达式（例如：`calc()`）。

#### JavaScript

- 避免频繁操作样式，最好一次性重写 style 属性，或者将样式列表定义为 class 并一次性更改 class 属性。
- 避免频繁操作 DOM，创建一个 documentFragment，在它上面应用所有 DOM 操作，最后再把它添加到文档中。
- 也可以先为元素设置 display: none，操作结束后再把它显示出来。因为在 display 属性为 none 的元素上进行的 DOM 操作不会引发回流和重绘。
- 避免频繁读取会引发回流/重绘的属性，如果确实需要多次使用，就用一个变量缓存起来。
- 对具有复杂动画的元素使用绝对定位，使它脱离文档流，否则会引起父元素及后续元素频繁回流。

### 3.position 的值, relative 和 absolute 分别是相对于谁进行定位的

- **absolute** 生成绝对定位的元素，相对于最近一级的 定位不是 `static` 的父元素来进行定位。
- **fixed** （老 IE 不支持）生成绝对定位的元素，相对于浏览器窗口进行定位。
- **relative** 生成相对定位的元素，相对于其在普通流中的位置进行定位。
- **static** 默认值。没有定位，元素出现在正常的流中。

## 2020/2/21

### 1. 对比下 px、em、rem 有什么不同

- px 是像素单位，指定多少就是多少，方便于计算；
- em 的值是不固定的，相对于父级元素，并且会继承父级元素的字体大小。默认浏览器的字体大小为 16px，不对浏览器做处理时，1em = 16px; 那么 12px = 0.75em；
- rem 相对于根元素的 html 字体大小

### 2. 用 translate 来改变位置, 和用定位的区别

`translate()`是 transform 的一个值。改变 transform 或 opacity 不会触发浏览器重新布局（reflow）或重绘（repaint）。而改变绝对定位会触发重新布局，进而触发重绘和复合。transform 使浏览器为元素创建一个 GPU 图层，但改变绝对定位会使用到 CPU。 因此 translate()更高效，可以缩短平滑动画的绘制时间。

而 translate 改变位置时，元素依然会占据其原始空间，绝对定位就不会发生这种情况。
