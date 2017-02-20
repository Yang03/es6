```
const obj = {a:1, b: {c: 2}}

const {a, b, d} = obj

console.log(a) // 1
console.log(b) // {c: 2}
console.log(d) //undefined



const obj2 = {e:1, f: {j: 2}}

const {f:{j} } = obj2

const {e: y, f: {j : x}} = obj2 //重命名



console.log(j) // 2

console.log(x) // 2
console.log(y) //1


let [foo = true] = [] //默认值

let {p, n: {l} = {}} = {p: 1} // 解析b 默认等于{}
console.log(l) //undefined
console.log(foo) // true
```
