### 构建对象模型


浏览器渲染页面前需要先构建 DOM 和 CSSOM 树。因此，我们需要确保尽快将 HTML 和 CSS 都提供给浏览器。

Bytes -> Characters ->Tokens -> Nodes -> DOM 

1. 转换：从字节按照指定编码（如utf-8）转换成字符 html, body,p 等字符串
2. （指令）Token化：按照Html5的标准，转换成“<html>” “<body>” 等标签
3. 词法分析: 发出的令牌转换成定义其属性和规则的“对象”。 
4. DOM构建:由于 HTML 标记定义不同标记之间的关系


### CSS 对象模型 (CSSOM)
在浏览器构建DOM时，在文档的head里面遇到link的标记，会立即发起对css资源的引用

CSS 字节转换成字符，接着转换成令牌和节点，最后链接到一个称为“CSS 对象模型”(CSSOM) 的树结构内

### CSSOM 树和 DOM 树合并成渲染树
1. 从DOM树的根节点开始遍历每个可见节点
    忽略一些不可见节点，比如script，css标签，通过css隐藏的节点

2. 对于可见节点，为其找到适配的CSSOM 规则
3. 发现可见节点，计算样式    

最终输出的渲染同时包含了屏幕上的所有可见内容及其样式信息,这个时候就可以进入“布局阶段”


#### 自动重排(布局)
    我们计算了哪些节点应该是可见的以及它们的计算样式，但我们尚未计算它们在设备视口内的确切位置和大小---这就是“布局”阶段，也称为“自动重排”

    布局流程的输出是一个“盒模型”，它会精确地捕获每个元素在视口内的确切位置和尺寸：所有相对测量值都转换为屏幕上的绝对像素

    最后我们知道哪些节点可以见，以及它们的“盒子模型”。这个时间就可以，将渲染树中的每个节点转换成屏幕上的实际像素。这一步通常称为“绘制”或“栅格化”。


### 阻塞渲染的 CSS


绘制的时候需要DOM 和 CSSOM 合并渲染树，浏览器将不会渲染任何已处理的内容，直至 CSSOM 构建完毕，
浏览器会下载所有 CSS 


### 阻塞渲染的 javaScript
JavaScript 允许我们修改网页的方方面面：内容、样式以及它如何响应用户交互。  
JavaScript 也会阻止 DOM 构建和延缓网页渲染。

* JavaScript 可以查询和修改 DOM 与 CSSOM。
* JavaScript 执行会阻止 CSSOM。
* 除非将 JavaScript 显式声明为异步，否则它会阻止构建 DOM。

我们的脚本在文档的何处插入，就在何处执行。当 HTML 解析器遇到一个 script 标记时，它会暂停构建 DOM，将控制权移交给 JavaScript 引擎；等 JavaScript 引擎运行完毕，浏览器会从中断的地方恢复 DOM 构建。


### 使用 Navigation Timing API 设置您的代码
domInteractive 表示 DOM 准备就绪的时间点。
domContentLoaded 一般表示 DOM 和 CSSOM 均准备就绪的时间点。
如果没有阻塞解析器的 JavaScript，则 DOMContentLoaded 将在 domInteractive 后立即触发。
domComplete 表示网页及其所有子资源都准备就绪的时间点。

