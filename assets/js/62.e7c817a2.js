(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{463:function(t,s,a){"use strict";a.r(s);var n=a(2),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"nexttick"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nexttick"}},[t._v("#")]),t._v(" nextTick")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://juejin.cn/post/6844904147804749832",target:"_blank",rel:"noopener noreferrer"}},[t._v("源码解析"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"是什么"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#是什么"}},[t._v("#")]),t._v(" 是什么")]),t._v(" "),s("blockquote",[s("p",[t._v("在下次 DOM 更新循环结束之后执行延迟回调。在修改数据之后立即使用这个方法，获取更新后的 DOM")])]),t._v(" "),s("p",[t._v("注意：Vue 在更新 DOM 时是异步执行的。当数据发生变化，Vue将开启一个异步更新队列，视图需要等队列中所有数据变化完成之后，再统一进行更新。\n这种在缓冲时去除重复数据对于避免不必要的计算和 DOM 操作是非常重要的。")]),t._v(" "),s("p",[t._v("Vue 在内部对异步队列尝试使用原生的 Promise.then、MutationObserver 和 setImmediate，如果执行环境不支持，则会采用 setTimeout(fn, 0) 代替。")]),t._v(" "),s("h2",{attrs:{id:"为什么要有nexttick"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为什么要有nexttick"}},[t._v("#")]),t._v(" 为什么要有nexttick")]),t._v(" "),s("p",[t._v("举个例子")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("num"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" i"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    num "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" i\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("如果没有 nextTick 更新机制，那么 num 每次更新值都会触发视图更新(上面这段代码也就是会更新10万次视图)，有了nextTick机制，只需要更新一次，所以nextTick本质是一种优化策略")]),t._v(" "),s("p",[t._v("示例：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 修改数据")]),t._v("\nvm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("message "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'修改后的值'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// DOM 还没有更新")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$el"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("textContent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 原始的值")]),t._v("\nVue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("nextTick")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// DOM 更新了")]),t._v("\n  console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("vm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$el"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("textContent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 修改后的值")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 组件内使用")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("message "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'修改后的值'")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$el"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("textContent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// => '原始的值'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("$nextTick")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$el"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("textContent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// => '修改后的值'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[s("code",[t._v("$nextTick()")]),t._v("会返回一个 "),s("code",[t._v("Promise")]),t._v(" 对象，可以是用"),s("code",[t._v("async/await")]),t._v("完成相同作用的事情")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("message "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'修改后的值'")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$el"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("textContent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// => '原始的值'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("$nextTick")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nconsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$el"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("textContent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// => '修改后的值'")]),t._v("\n")])])]),s("h2",{attrs:{id:"源码解析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#源码解析"}},[t._v("#")]),t._v(" 源码解析")]),t._v(" "),s("p",[t._v("源码位置："),s("code",[t._v("/src/core/util/next-tick.js")])]),t._v(" "),s("p",[s("code",[t._v("callbacks")]),t._v("也就是异步操作队列")]),t._v(" "),s("p",[s("code",[t._v("callbacks")]),t._v("新增回调函数后又执行了"),s("code",[t._v("timerFunc")]),t._v("函数，"),s("code",[t._v("pending")]),t._v("是用来标识同一个时间只能执行一次\ntimerFunc函数定义，这里是根据当前环境支持什么方法则确定调用哪个，分别有：")]),t._v(" "),s("p",[s("code",[t._v("Promise.then、MutationObserver、setImmediate、setTimeout")]),t._v("\n通过这些方法对任务进行降级操作，前两个微任务，后两个宏任务")]),t._v(" "),s("blockquote",[s("p",[t._v("MutationObserver是Html5的一个新特性，用来监听目标DOM结构是否改变，也就是代码中新建的textNode；如果改变了就执行MutationObserver构造函数中的回调函数，不过是它是在微任务中执行的。")])]),t._v(" "),s("p",[t._v("无论是微任务还是宏任务，都会放到"),s("code",[t._v("flushCallbacks")]),t._v("使用,也就是刷新回调函数")]),t._v(" "),s("p",[t._v("这里将callbacks里面的函数复制一份，同时callbacks置空")]),t._v(" "),s("p",[t._v("依次执行callbacks里面的函数")]),t._v(" "),s("p",[t._v("可以看到源码里对兼容性考虑的比较全面，然后优先放到微任务里面执行\n小结：")]),t._v(" "),s("ol",[s("li",[t._v("把回调函数放入callbacks等待执行")]),t._v(" "),s("li",[t._v("将执行函数放到微任务或者宏任务中")]),t._v(" "),s("li",[t._v("事件循环到了微任务或者宏任务，执行函数依次执行callbacks中的回调")])])])}),[],!1,null,null,null);s.default=e.exports}}]);