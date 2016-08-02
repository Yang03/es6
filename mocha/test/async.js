var fs = require('fs')

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