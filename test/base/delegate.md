### 什么是事件冒泡？

事件开始由具体的元素接收，然后逐层传播到不具体的节点
dom标准事件流的触发的先后顺序为：先捕获再冒泡，即当触发dom事件时，会先进行事件捕获，捕获到事件源之后通过事件传播进行事件冒泡。

element div -> elemet body -> element html -> document
chorme ,safari 冒泡到window

### 事件捕获
事件由不具体的节点接收，具体的节点最后接收
documet -> html -> body -> element div

### DOM事件流

* 捕获阶段
* 处于目标阶段
* 冒泡阶段

```
    addElement Listener(eventType, fn, capture) //是否捕获阶段执行 true
   事件由不具体的节点接收，具体的节点最后接收 out -> inner
```

https://jsfiddle.net/mhvzow4x/

### 事件的委托

利用事件的冒泡，我可以为一个element,指定事件。如：

```
    ul#list
        li 1
        li 2
        li 3

    var $elemnet =  document.getElemetById('list')
    $element.addElementListener('click', function(e){
        console.log(e.taregt.innerHTML) 
    })

```

//  动态生成的元素，是不能绑定注册事件的，但是发生click 的时候，依然会冒泡




