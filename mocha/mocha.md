### mocha?
    mocha是一个功能丰富的js 测试框架，运行在node.js和浏览器器端

### Getting Started

    var assert = require('assert');

    describe('Array', function() {

     describe('#indexOf()', function () {

       it('should return -1 when the value is not present', function () {

         assert.equal(-1, [1,2,3].indexOf(5));

         assert.equal(-1, [1,2,3].indexOf(0));

       });

     });

    });

#### terminal:
   ```
    mocha
    ```

### mocha 允许使用第三方库,如(should.js)
```
    npm install should --save-dev
```

### Asynchronous 异步
```
    describe('async', function(){
        describe('async function', function(){
           it ('no err', function(done) {
               fs.appendFile('message.txt', 'data to append', function (err) {
                 if (err) throw err;
                 done();
               });
           });
        })
    })
```
当test 执行完成后执行done







