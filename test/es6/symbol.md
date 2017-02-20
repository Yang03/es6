### Symbol
* 是一种不可变的数据类型，可以作为对象属性的标识使用
* Number, Boolean, String, Object, Undefined, Null, Symbol

### 创建一个symbol
```
    const c = Symbol()
    const d = new Symbol()  //error
```

### 全局共享的Symbol
```
    const f = Symbol.for('test') // 注册
    const e = Symbol.keyFor(f) //获取
```

###  获取对象中的Symbol 属性
```
    const obj = {};
    const a = Symbol("a")
    const b = Symbol.for("b")

    obj[a] = "localSymbol"
    obj[b] = "globalSymbol";

    const objectSymbols = Object.getOwnPropertySymbols(obj)

    console.log(objectSymbols)
```

### Symbol.iterator
Symbol.iterator 为每一个对象定义了默认的迭代器。该迭代器可以被 for...of 循环结构使用

```

let  foo = {'1': 1, '2': 2, '3': 3}

Object.defineProperty(foo, Symbol.iterator, {
    value: function() {
        let _this = this
        let keys = Object.keys(_this)
        let len = keys.length
        let step = 0
        return {
            next: function() {
                if (step < len) {
                    return {value: _this[keys[step++]], done: false}
                } else {
                    return {value: undefined, done: true}
                }
            }
        }
    }
})


for (let x of foo) {
       console.log(x); // 1,2,3
   }
```
