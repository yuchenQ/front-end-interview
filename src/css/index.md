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
