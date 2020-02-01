# css 面经总结

## BFC 块级格式化上下文

> Block formatting context直译为"块级格式化上下文"。它是一个独立的渲染区域，只有Block-level box参与， 它规定了内部的Block-level Box如何布局，并且与这个区域外部毫不相干。通俗地讲，BFC是一个容器，用于管理块级元素

### BFC 布局规则

1. 内部的Box会在垂直方向，一个接一个地放置(即块级元素独占一行)。
2. BFC的区域不会与float box重叠(利用这点可以实现自适应两栏布局)。
3. 内部的Box垂直方向的距离由margin决定。属于同一个BFC的两个相邻Box的margin会发生重叠(margin重叠三个条件:同属于一个BFC;相邻;块级元素)。
4. 计算BFC的高度时，浮动元素也参与计算。（清除浮动 haslayout）
5. BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。反之也如此。

#### 特性1：BFC会阻止垂直外边距折叠

#### 特性2：BFC不会重叠浮动元素

#### 特性3：BFC可以包含浮动----清除浮动

***

## 居中布局

+ 水平居中

1. 行内元素: text-align:center
2. 块级元素: margin:0 auto
3. 绝对定位和移动: absolute + transform
4. 绝对定位和负边距: absolute + margin
5. flex布局: flex + justify-content:center

+ 垂直居中

1. 子元素为单行文本: line-height:height
2. absolute + transform
3. flex + align-items:center
4. table: display:table-cell; vertical-align: middle
5. 利用position和top和负margin

***

## 用纯CSS创建一个三角形的原理是什么

**Step1:** 写一个我们最熟悉的 border应用

```css
.box{
  width:100px;
  height:100px;
  border: 3px solid;
  border-color:#1b93fb #1bfb24 #efad48 #ef4848;
}
```

**Step2:** 接下来,我们将border值增大, 很容易发现, border渲染并不是正方形, 而是梯形的

**Step3:** 在增大border的基础下, 此时我们将盒子宽高变成0, 会发现四个三角形拼合成的矩形呈现在我们眼前,那如果我们只想要一个三角形, 我们可以将其他三个设为不可见;

**Step4:** 当然我们也可以采用逆向思维来写这个效果, 就是先将所有边框设为透明, 然后需要哪边再对其设置颜色, 效果是一样的

```css
.box{
  width:0px;
  height:0px;
  border: 50px solid transparent;
  border-left:50px solid #ef4848;
}
```

***

## 实现0.5px的细线

```css
.line {
  position: relative;
}
.line:after {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 1px;
  background-color: #000000;
  -webkit-transform: scaleY(.5);
  transform: scaleY(.5);
}
```

***

## link 与 @import 的区别

### 从属关系区别

> @import是 CSS 提供的语法规则，只有导入样式表的作用；link是HTML提供的标签，不仅可以加载 CSS 文件，还可以定义 RSS、rel 连接属性等

### 加载顺序区别

> 加载页面时，link标签引入的 CSS 被同时加载；@import引入的 CSS 将在页面加载完毕后被加载。

### 兼容性区别

> @import是 CSS2.1 才有的语法，故只可在 IE5+ 才能识别；link标签作为 HTML 元素，不存在兼容性问题。

### DOM可控性区别

> 可以通过 JS 操作 DOM ，插入link标签来改变样式；由于DOM方法是基于文档的，无法使用@import的方式插入样式
