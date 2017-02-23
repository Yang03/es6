### Generator
自动调用
```
    function* gen() {
        yield 1 + 2
        yield 1 + 3
    }

    function run() {
        const g = gen()
        function go(result) {
            //console.log(result)
            if (result.done) return
            go(g.next(result.value))
        }
        go(g.next())

    }
```

### thunk

```
function thunkify(fn){
    return function(){
        var args = [...arguments]
        var ctx = this;
        return (done) => {
              var called;
              args.push(function(){
                if (called) return;
                called = true;
                done.apply(null, arguments);
              });
              try {
                fn.apply(ctx, args);
              } catch (err) {
                done(err);
              }
            }
        }
    }

    function sum(x, y, callback) {
        var sum = x + y;
        callback.call(this, null, sum)
    }
    var thunkSum = thunkify(sum);
    thunkSum(1,2)(function (err, value) {
        console.log(value)
    })
```
