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


let [x, y] = ['a', 'b']; // x = 'a'; y = 'b'

let obj = { first: 'Jane', last: 'Doe' };
let { first: f, last: l } = obj; // (A)
    // f = 'Jane'; l = 'Doe'
    
let {foo: x=3, bar: y} = {}; // x = 3; y = undefined
    
Computed property keys 

const FOO = 'foo';
let { [FOO]: f } = { foo: 123 }; // f = 123

let [first, ...rest] = ['a', 'b', 'c'];
    // first = 'a'; rest = ['b', 'c']
```
