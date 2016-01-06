var compose = function() {
    var funcs = arguments;
    return function() {
        var args = arguments,
            length = funcs.length;
        while (length--) {
            args = [funcs[length].apply(this, args)];
        }
        return args[0];
    };
};


function a(x) {
    console.log(2)
    return x + 10
}

function b(y) {
    console.log(1)
    return y + 20
}


var c = compose(a, b);

var d = c(2);
console.log(d);