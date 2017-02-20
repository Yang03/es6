// function order(x, y) {
//     if (x > y) { // (A)
//         let tmp = x;
//         x = y;
//         y = tmp;
//     }
//     console.log(tmp===x); // ReferenceError: tmp is defined
//     return [x, y];

// const f = Symbol.for('test') // 注册
// const e = Symbol.keyFor(f) //获取
// console.log(e)
// const obj = {};
// const a = Symbol("a")
// const b = Symbol.for("b")
//
// obj[a] = "localSymbol"
// obj[b] = "globalSymbol";
//
// const objectSymbols = Object.getOwnPropertySymbols(obj)
//
// console.log(objectSymbols)
//
// let  foo = {'1': 1, '2': 2, '3': 3}
//
// Object.defineProperty(foo, Symbol.iterator, {
//     value: function() {
//         let _this = this
//         let keys = Object.keys(_this)
//         let len = keys.length
//         let step = 0
//         return {
//             next: function() {
//                 if (step < len) {
//                     return {value: _this[keys[step++]], done: false}
//                 } else {
//                     return {value: undefined, done: true}
//                 }
//             }
//         }
//     }
// })
//
//
// for (let x of foo) {
//        console.log(x);
//    }
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
