//given 3 sides of a triangle, solve the area using the function with side a, b, and c.
function area(a, b, c) {
const perimeter = (a + b + c) / 2;
let areaOfTriangle = Math.sqrt(perimeter * (perimeter - a) * (perimeter - b) * (perimeter - c));
return `The area of the triangle is ${areaOfTriangle}.`; 
};
area(15, 38, 22);
console.log(area(15, 38, 22));
