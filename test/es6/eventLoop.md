### EventLoop

先看下一段代码：

```
    function log(msg) {
        console.log(msg)
    }

    log('EventLoop')    



    setTimeout(function() {
        log('setTimeout')
    }, 100)

    setTimeout(function() {
        console.log('zero delay')
    },0)
```
函数调用会产生堆栈，

###栈

栈是先进先出的

##### 堆
对象被分配在一个堆中，一个用以表示一个内存中大的未被组织的区域。

调用 setTimeout 函数会在一个时间段过去后在队列中添加一个消息。
如果队列中没有其它消息，消息会被马上处理。
但是，如果有其它消息，setTimeout 消息必须等待其它消息处理完。
第二个参数仅仅表示最少的时间 而非确切的时间


零延迟 (Zero delay) 并不是意味着回调会立即执行。在零延迟调用 setTimeout 时
，其并不是过了给定的时间间隔后就马上执行回调函数。
其等待的时间基于队列里正在等待的消息数量
