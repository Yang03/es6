function log(...args) {
    return function (target, key, descriptor) {
        console.log()
    }
}

class Test {
    @log
    func() {
        for(let i = 0; i < 10000; i++) {
            console.log(i)
        }
    }
}