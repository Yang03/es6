### EventLoop

When Node.js starts, it initializes the event loop, processes the provided input script (or drops into the REPL, which is not covered in this document) which may make async API calls, schedule timers, or call process.nextTick(), then begins processing the event loop.

```
当nodejs启动时，会初始化事件循环，处理提供的输入脚本(或是删除REPL),会让异步API调用，调度定时器或者process.nextTick().然后开始事件的循环
```


Each phase has a FIFO queue of callbacks to execute. While each phase is special in its own way, generally, when the event loop enters a given phase, it will perform any operations specific to that phase, then execute callbacks in that phase's queue until the queue has been exhausted or the maximum number of callbacks has executed. When the queue has been exhausted or the callback limit is reached, the event loop will move to the next phase, and so on.

```
每一个阶段都会执行一个先进先出的(FIFO) first in, first out的回调队列，尽管每个阶段都是有自己特殊的的形式，通常，当一个事件
循环进入给的阶段，它将会执行该阶段的任何特定操作，然后执行在该阶段的回调队列，直到队列执行完，或者最大限制的回调被执行。。当队列执行完，或者达到回调
限制，事件循环会到下一个阶段，以此类推。

```

Since any of these operations may schedule more operations and new events processed in the poll phase are queued by the kernel, poll events can be queued while polling events are being processed. As a result, long running callbacks can allow the poll phase to run much longer than a timer's threshold. See the timers and poll sections for more details.

```
    由于这些操作中的任意一个可以调用更多的操作，新的事件处理在轮循阶段，会在内核中排队，
    轮询事件可以在轮询事件正在处理时排队。
    因此,长时间运行的回调允许轮循阶段运行超过一个计时器的阈值
```

Phases Overview

* timers: this phase executes callbacks scheduled by setTimeout() and setInterval().
* I/O callbacks: executes almost all callbacks with the exception of close callbacks, the ones scheduled by timers, and * * * * setImmediate().
* idle, prepare: only used internally.
* poll: retrieve new I/O events; node will block here when appropriate.
* check: setImmediate() callbacks are invoked here.
* close callbacks: e.g. socket.on('close', ...).


Between each run of the event loop, Node.js checks if it is waiting for any asynchronous I/O or timers and shuts down cleanly if there are not any.


```
    timers: 这个阶段执行setTimeout 和 setInterval 的回调
    I/O: 执行几乎所有回调，除了close回调，由计时器调度的回调和* * * * setImmediate（）。
    idle: 只在内部使用(空闲)
    poll: 检查新的I/O事件， 节点会在这个地阻塞
    check: 执行setImmediate()回调.
    close:
```
```

在事件循环的每次运行之间，Node.js检查它是否正在等待任何异步I / O或计时器, 如何没有，回关闭
```

[process.nexttick()](https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/#timers)
