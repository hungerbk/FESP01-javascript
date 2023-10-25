function fn(n1, n2) {
  // console.log(n1, n2);
  // 모든 인자값의 합계를 출력
  var sum = 0;
  for (var i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  console.log("합계", sum);
}

// 수와 상관 없이 에러가 발생하지 않음
fn();
fn(10);
fn(20, 30);
fn(40, 50, 60);
fn(40, 50, 60, 1, 234, 2, 3, 4, 5, 8, 7, 6, 5, 4, 2, 3, 45, 678, 7654, 5, 67, 653);
