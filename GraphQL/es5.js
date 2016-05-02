//function Point(x, y) {
//    this.x = x;
//    this.y = y;
//}
//
//Point.prototype.print = function() {
//    console.log('x:' + this.x + ',y:' + this.y);
//}
//
//function ColorPoint(x, y, color) {
//    Point.apply(this, [x, y]);
//    this.color = color;
//}
//
//ColorPoint.prototype = new Point();
//ColorPoint.prototype.constructor = ColorPoint;
//
//
////ColorPoint.prototype = Object.create(Point.prototype);
//console.log(Point());
//var cp = new ColorPoint(4, 5);
//cp.print();
//console.log(cp.hasOwnProperty(print));
//
//ColorPoint.prototype.print = function() {
//    console.log('x:' + this.x + ',y:' + this.y + ',color:' + this.color);
//}
//
//var cp2 = new ColorPoint(5, 6, 'red')
//cp2.print()