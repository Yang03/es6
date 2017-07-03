### var, let, const diff

*  let 命令所在的代码块内有效

```
    {
        let a = 1
        var b = 2    
    }
    console.log(a) //error
    consle.log(b) // 2
```

* var hoisting变量声明提升

```
    function test1() {
        console.log(a) //error
        let a = 1
    }
    test1()



    function test2() {
        console.log(b) //undefined
        var b = 2
    }
    test2()



    function test3() {
        console.log(c)  //error
        const c = 4
    }
    test3()
```

* const 变量不可以修改，必须赋值，let, var 可以不立即赋值

```
    const a = 1
    a = 2 //error
    // const a 储存的是一个地址,不可以修改

    const f = {xx: 1}
    f.xx = 2
    // 可以修改，修改的是对象的，没有改变储存的地址

    let b = 1
    b = 2

    var c = 1

    c = 2
```

* let 是块级别的作用域, var 是函数级别的

```
    function order(x, y) {
        if (x > y) { // (A)
            let tmp = x;
            x = y;
            y = tmp;
        }
        console.log(tmp); // ReferenceError: tmp is not defined
        return [x, y];
    }


    function order2(x, y) {
        if (x > y) { // (A)
            let tmp = x;
            x = y;
            y = tmp;
        }
        console.log(tmp); //  undefined or x
        return [x, y];
    }
```

* let ,const 的作用域都是块级别的  

```
 if (true) {
     const min = 1
 }
 console.log(min) // Uncaught ReferenceError: min is not defined
```

