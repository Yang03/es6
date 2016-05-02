class Point {
    constructor (x, y) {
        this._x = x;
        this._y = y;
    }
    get x () {
        console.log('get')
        return this._x;
    }

    set x(x) {
        console.log('set');
        this._x = x;
    }

    static print() {
        console.log(this._x);
    }

    write() {
        console.log(this._y);
    }
}

var p = new Point(1, 2);

console.log(p.x)

p.x = 4;

