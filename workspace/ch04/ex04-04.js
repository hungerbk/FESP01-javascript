var sum = function (x, y) {
  return x + y;
};

// 10이 공통적으로 사용되니까 이 부분을 저장한 함수를 만들 것
console.log(sum(10, 20));
console.log(sum(10, 30));
console.log(sum(10, 40));

// 함수가 필요한 부분을 미리 저장해두고 사용
var sum10 = _.partial(sum, 10);

console.log(sum10(20));
console.log(sum10(30));
console.log(sum10(40));
