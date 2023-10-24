// Number
var num = 100;
var floatNum = 3.14;
// String
var s1 = "single quote"; //프리티어로 인해 큰따옴표로 변환;;
var s2 = "double quote";

// Boolean
var b1 = true;
var b2 = false;
// undefined
var emptyVar;

// null
var nullVar = null;

console.log(num, floatNum, s1, s2, b1, b2, emptyVar, nullVar);
console.log(typeof num, typeof floatNum, typeof s1, typeof s2, typeof b1, typeof b2, typeof emptyVar, typeof nullVar);

console.log(emptyVar === typeof emptyVar); //false
console.log(emptyVar == nullVar); //true
console.log(emptyVar === nullVar); //false
