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
