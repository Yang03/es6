function thunkify(fn){
        return function(){
            var args = [...arguments]
            var ctx = this;
            return (done) => {
              var called;
              console.log(args)
              console.log(done)
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
