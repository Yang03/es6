class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    print() {
        return '(' + this.x + ', ' + this.y + ')';
    }
}

class ColorPoint extends Point {
    constructor(x, y, color) {
        super(x, y);
        this.color = color;
    }
    print() {
        console.log(super.print() + this.color);
    }
}

var cp2 = new ColorPoint(5, 6, 'red')
Point.print()

step1

console.log(ColorPoint.prototype.constructor === ColorPoint);

console.log(cp2.__proto__ === ColorPoint.prototype);

//console.log(cp2.__proto__);


// cp
