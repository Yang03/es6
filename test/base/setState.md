### setState

```
    state = {
        val: 0
    }
    componentDidMount() {
        this.setState('val', this.state.val + 1)
        console.log(this.state.val)
        this.setState('val', this.state.val + 1)
        console.log(this.state.val)

        setTimeout(() => {
            this.setState('val', this.state.val + 1)
            console.log(this.state.val)
        }, 0)
    }
```
结果：`0, 0, 2` 因为前面第二次 `setState`的时候，第一 `setState` 并没有执行，所以这个地方的 `val` 还是  `0`

`setState` 并不是异步的, 只是`react`里面做了优化，多次`setState` 会放在一个 `queue` 里面，一次执行,
但是 `setTimeout` 的代码是异步代码，不会被添加到`queue`里面，所有就立即执行了
