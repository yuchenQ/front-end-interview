# React 高频问题 & 解答

## 2020/20/13

### 1. 什么是 CSR（客户端渲染），SSR（服务端渲染），isomorphic/universal（同构）

- **后端渲染**：服务器直接生成 HTML 文档并返回给浏览器，但页面交互能力有限。适用于任何后端语言：PHP、Java、Python、GO 等。
- **客户端渲染**：页面初始加载的 HTML 文档中无内容，需要下载执行 JS 文件，由浏览器动态生成页面，并通过 JS 进行页面交互事件与状态管理。
- **同构：isomorphic/universal**：基于 react、vue 框架，客户端渲染和服务器端渲染的结合，在服务器端执行一次，用于实现服务器端渲染（首屏直出），在客户端再执行一次，用于接管页面交互，核心解决 SEO 和首屏渲染慢的问题

#### CSR 的问题

##### 1.客户端渲染的 TTFP（Time To First Page）时间比较长，一般起码需要 3 个 HTTP 请求周期

加载 HTML 文档 -> 加载 JS 文件 -> API 请求数据 -> 根据数据渲染页面
也就是初始化页面会出现白屏，性能上通过 Node 直出, 将传统的三次串行 http 请求简化成一次 http 请求，降低首屏渲染时间

##### 2.单页应用的 SEO 能力几乎为零

SPA 首次加载的 HTML 文档没有内容，而目前大多数搜索引擎主要识别的内容还是 HTML，对 JavaScript 文件内容的识别都还比较弱，所以如果公司对 SEO 有需求（或者将来需要），那么 SPA 就不太适合了

#### CSR 和 SSR 有几个共同点

- 都需要下载 React 的
- 都需要经历虚拟 DOM 构建过程
- 都需要（给页面元素）绑定事件来增强页面的可交互性

不过对于使用 SSR 方式渲染出的 HTML 页面来说，用户是可以在这些操作（指的是下载 React、构建虚拟 DOM、绑定事件）完成之前就能看到页面。

再反观使用 CSR 方式渲染出的 HTML 页面，你必须等到上面的这些操作（指的是下载 React、构建虚拟 DOM、绑定事件）都完成，virtual-dom 转换成（浏览器）页面上的真实 dom 之后，用户才能看到页面。

#### SSR 的缺点

##### 理论上，SSR（包括传统的服务端渲染）最大的瓶颈就是服务端的性能

如果用户规模大，SPA 本身就是一个大型分布式系统，充分利用用户的设备去运行 JS 的运算，SSR 则是把这些工作包揽到自己的服务器上。所以对于需要大量计算（图表特别多）而且用户量巨大的页面，并不太适合，但 SSR 非常适合于大部分的内容展示页面

##### 项目复杂度增加，需要前端团队有较高的技术素养

为了同构要处处兼容 Node.js 不同的执行环境，不能有浏览器相关的原生代码在服务端执行，前端代码使用的 window 在 node 环境是不存在的，所以要 mock window，其中最重要的是 cookie，userAgent，location

### 2. setState 到底是异步还是同步

#### 答案: 有时表现出异步,有时表现出同步

#### setState 只在合成事件和钩子函数中是“异步”的，在原生事件和 setTimeout 中都是同步的。

- setState 的“异步”并不是说内部由异步代码实现，其实本身执行的过程和代码都是同步的，只是合成事件和钩子函数的调用顺序在更新之前，导致在合成事件和钩子函数中没法立马拿到更新后的值，形成了所谓的“异步”，当然可以通过第二个参数 setState(partialState, callback) 中的 callback 拿到更新后的结果。
- setState 的批量更新优化也是建立在“异步”（合成事件、钩子函数）之上的，在原生事件和 setTimeout 中不会批量更新，在“异步”中如果对同一个值进行多次 setState，setState 的批量更新策略会对其进行覆盖，取最后一次的执行，如果是同时 setState 多个不同的值，在更新时会对其进行合并批量更新。

### 什么是受控组件

- 在 HTML 中，表单元素通常维护自己的状态，并根据用户输入进行更新。当用户提交表单时，来自上述元素的值将随表单一起发送。
- 而 React 的工作方式则不同。包含表单的组件将跟踪其状态中的输入值，并在每次回调函数(例如 onChange)触发时重新渲染组件，因为状态被更新。以这种方式由 React 控制其值的输入表单元素称为受控组件

### 3. React 的请求应该放在哪个生命周期中

React 的异步请求到底应该放在哪个生命周期里,有人认为在 componentWillMount 中可以提前进行异步请求,避免白屏,其实这个观点是有问题的.

由于 JavaScript 中异步事件的性质，当您启动 API 调用时，浏览器会在此期间返回执行其他工作。当 React 渲染一个组件时，它不会等待 componentWillMount 它完成任何事情 - React 继续前进并继续 render,没有办法“暂停”渲染以等待数据到达。

而且在 componentWillMount 请求会有一系列潜在的问题:

- 在服务器渲染时,如果在 componentWillMount 里获取数据，fetch data 会执行两次，一次在服务端一次在客户端，这造成了多余的请求
- 在 React 16 进行 React Fiber 重写后, componentWillMount 可能在一次渲染中多次调用.

目前官方推荐的异步请求是在 componentDidMount 中进行.

### 4. redux 的工作流程

#### 首先，我们看下几个核心概念

1. **Store**：保存数据的地方，你可以把它看成一个容器，整个应用只能有一个 Store。
2. **State**：Store 对象包含所有数据，如果想得到某个时点的数据，就要对 Store 生成快照，这种时点的数据集合，就叫做 State。
3. **Action**：State 的变化，会导致 View 的变化。但是，用户接触不到 State，只能接触到 View。所以，State 的变化必须是 View 导致的 3.。Action 就是 View 发出的通知，表示 State 应该要发生变化了。
4. **Action Creator**：View 要发送多少种消息，就会有多少种 Action。如果都手写，会很麻烦，所以我们定义一个函数来生成 Action，这个函数就叫 Action Creator。
5. **Reducer**：Store 收到 Action 以后，必须给出一个新的 State，这样 View 才会发生变化。这种 State 的计算过程就叫做 Reducer。Reducer 是一个函数，它接受 Action 和当前 State 作为参数，返回一个新的 State。
6. **dispatch**：是 View 发出 Action 的唯一方法。

#### 然后我们过下整个工作流程

1. 首先，用户（通过 View）发出 Action，发出方式就用到了 dispatch 方法。
2. 然后，Store 自动调用 Reducer，并且传入两个参数：当前 State 和收到的 Action，Reducer 会返回新的 State
3. State 一旦有变化，Store 就会调用监听函数，来更新 View。

到这儿为止，一次用户交互流程结束。可以看到，在整个流程中数据都是单向流动的，这种方式保证了流程的清晰。

#### redux 中间件有哪些，做什么用

中间件提供第三方插件的模式，自定义拦截 action -> reducer 的过程。变为 **action -> middleware -> reducer** 。这种机制可以让我们改变数据流，实现如异步 action ，action 过滤，日志输出，异常报告等功能

### 5. diff 算法

- 把树形结构按照层级分解，只比较同级元素。
- 给列表结构的每个单元添加唯一的 key 属性，方便比较。
- React 只会匹配相同 class 的 component（这里面的 class 指的是组件的名字）
- 合并操作，调用 component 的 setState 方法的时候, React 将其标记为 dirty.到每一个事件循环结束, React 检查所有标记 dirty 的 component 重新绘制
- 选择性子树渲染。开发人员可以重写 shouldComponentUpdate 提高 diff 的性能
