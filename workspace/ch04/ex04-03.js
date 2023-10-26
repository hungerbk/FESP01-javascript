function sum(a, b, c) {
  return a + b + c;
}
console.log(sum(10, 20, 30));

// function currySum(a) {
//   return function (b) {
//     return function (c) {
//       return a + b + c;
//     };
//   };
// }

var currySum = (a) => (b) => (c) => a + b + c;

console.log(currySum(10)(20)(30));

var myCurry = function (fn) {
  return function (a) {
    return function (b) {
      return function (c) {
        return sum(a, b, c);
      };
    };
  };
};

var curryAdd = myCurry(sum);
console.log(curryAdd(1)(2)(3)); // 인자값 3개를 만들때로 고정되어 있음

// lodash
var currySum = _.curry(sum); // 인자값 여러개 보내는 걸 쪼개서 보냄. 여러 방식으로 사용할 수 있음
console.log(currySum(2)(3)(4));
console.log(currySum(2, 3)(4));
console.log(currySum(2)(3, 4));
console.log(currySum(2, 3, 4));
