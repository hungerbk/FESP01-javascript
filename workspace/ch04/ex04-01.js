var global = "전역변수";

function outer() {
  var innerVal = "outer의 지역변수"; // 자유 변수
  console.log(global); // 전역변수는 스크립트 내의 어느 곳에서나 접근 가능
  console.log(innerVal); // 지역변수는 선언한 함수내에서만 접근 가능

  // Closure
  // 외부함수(outer)의 지역 변수(innerVal)를 외부함수의 실행이 완료된 후 내부함수(innerFn)의 호출로 참조되는 현상
  // Closure가 만들어지는 조건
  // 1. 함수 내부에서 함수 생성(내부함수)
  // 2. 내부 함수가 외부 함수의 지역변수를 참조

  var innerFn = function () {
    console.log(innerVal);
  };
  // innerFn() // error X. 정상 작동
  return innerFn;
}

// outer();
var inner = outer();
inner(); //error X. 이게 실행되는 시점에는 outer 함수는 종료된 시점. innerVal(지역변수)도 사라진 후인데 왜 에러가 안 날까? => clousure 덕분
console.log(global); // 전역변수는 스크립트 내의 어느 곳에서나 접근 가능
// console.log(innerVal); // 지역변수는 선언한 함수내에서만 접근 가능
