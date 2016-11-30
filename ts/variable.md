### var, let ,const
- var 的作用域时函数级的
- let 是作用域是块的
- const 是不可以修改的

var的问题比如循环里面的闭包，需要使用立即执行的函数表达式来捕获每次迭代的值
所有变量除了你计划去修改的都应该使用const

### Destructuring (解构)

```
let a = [1,2]
let [b, c] = a  // b: 1, c:2
```
函数传递
```
function f([first, second]: [number, number]) {
    console.log(first);
    console.log(second);
}
```
用...
```
    let c = [1,3,4]
    let [d, ...f] = c // d: 1, f: 3,4 
```
别名
```
    let {a: newName1, b: newName2} = o
```
类型检查
```
let {a, b}: {a: string, b: number} = o;
```

默认值可以让你在属性为 undefined 时使用缺省值：
```
function keepWholeObject(wholeObject: {a: string, b?: number}) {
    let {a, b = 1001} = wholeObject;
}
```

此处的 b?  表示 b 可以不传，但是如果传必须是number 类型
