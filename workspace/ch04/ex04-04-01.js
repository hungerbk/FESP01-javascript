var sum = function (x, y, z) {
  return x + y + z;
};

// 단계별로 에러 확인해보기
// Function에 partial 기능 추가
// prototype, this, arguments, 전개연산자, 고차함수(함수가 함수를 리턴한다), apply, closure
Function.prototype.partial = function () {
  var fn = this; // 호출한 대상
  var preArgs = [...arguments]; // [20, 80] // 몇개의 매개변수가 들어올지 모르기 때문에 arguments를 배열로 받음 => 위에서 나머지 매개변수로 받아도 괜찮음
  return function () {
    var args = [...preArgs, ...arguments]; // [20, 80, 30]
    return fn.apply(this, args); // fn(...args)로 작성해도 됨. 배운거 써보려고 apply 쓴거임!
  };
};

var sum100 = sum.partial(20, 80);

console.log(sum100(30), sum100(50));
