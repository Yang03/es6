@annotation
class MyClass { }

function annotation(target) {
   target.annotated = true;
}

/*
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

var MyClass = annotation(_class = function MyClass() {
   _classCallCheck(this, MyClass);
}) || _class;

function annotation(target) {
   target.annotated = true;
}*/


/*
class MyClass { }
annotation(MyClass)
*/
