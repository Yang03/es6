### this 

在全局执行上下文中， this指向全局对象

```
    var a = 1
    function f() {
        var a = 2
        console.log(this.a) // 1
    }
    f() 
```
在全局上下文中调用fn() == window.fn(). 所以fn函数中this 指向 window
所以 this.a 值为1
