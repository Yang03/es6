### mocha?
    mocha是一个功能丰富的js 测试框架，运行在node.js和浏览器器端

### BBD TDD
    * Behavior-driven development 行为驱动开发(注重测试逻辑）
    * Test-driven development   测试驱动开发（注重输出结果）


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
    mocha --recursive 执行test目录下所有目录
    mocha test/{xx,xxx}.js 执行test下xx.js,xxx.js的测试
    mocha test/unit/*js 执行unit下面所有的js
    mocha --watch 监视指定的测试脚本。只要测试脚本有变化，就会自动运行Mocha
    mocha --bail 只要有一个测试用例没有通过，就停止执行后面的测试用例
    mocha --grep 搜索用的

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

### only 和skip
使用了only之后，这条descibe就只执行only，其他的忽略。
skip作用相反，其他会执行，自己会被忽略


### Pending
it里面的function留空。mocha默认会pass这条测试。

### hook
    ＊before  // 在本区块的所有测试用例之前执行
    ＊beforeEach // 在本区块的每个测试用例之前执行
    ＊after
    ＊afterEach

### 









