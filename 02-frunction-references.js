function sum( x, y ) {
    return x + y;
}

var add = sum;
var summation = add;

console.log( add( 12, 13 ) );
console.log( summation( 12, 13 ) );