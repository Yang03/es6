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
const obj = {};
const a = Symbol("a")
const b = Symbol.for("b")

obj[a] = "localSymbol"
obj[b] = "globalSymbol";

const objectSymbols = Object.getOwnPropertySymbols(obj)

console.log(objectSymbols)
