### var, let, const diff

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
    // const 声明变量是指针,不可以修改

    const f = {xx: 1}
    f.xx = 2
    // 可以修改，修改的是对象的引用，没有改变指针

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
