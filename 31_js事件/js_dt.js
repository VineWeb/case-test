// 多态通过对象方法实现
function Shape() {}

Shape.prototype.draw = function() {
  console.log('Drawing a shape');
};

function Circle() {}
Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.draw = function() {
  console.log('Drawing a circle');
};

function Square() {}
Square.prototype = Object.create(Shape.prototype);
Square.prototype.constructor = Square;

Square.prototype.draw = function() {
  console.log('Drawing a square');
};

const shapes = [new Circle(), new Square()];
shapes.forEach(shape => shape.draw());
