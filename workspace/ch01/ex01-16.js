// TODO: hoisting 단원. 함수 선언 보다 먼저 사용이 가능한 이유
add(); // 선언문은 함수 자체가 호이스팅되기 때문에 함수가 모두 정의되고 실행문이 실행 => 에러 X

// 10 + 100의 결과를 출력한다.
function add() {
  let n1 = 10;
  let n2 = 100;
  let result = n1 + n2;
  console.log(n1 + " + " + n2 + " = " + result);
}

// 전달받은 숫자와 100의 합계를 출력한다.
function add100(n1) {
  let n2 = 100;
  let result = n1 + n2;
  console.log(`${n1} + ${n2} = ${result}`);
}

// 전달받은 두 수의 합계를 출력한다.
function sum(n1, n2) {
  let result = n1 + n2;
  console.log(`${n1} + ${n2} = ${result}`);
}

// 전달받은 두 수의 합계를 반환한다.
function sum2(n1, n2) {
  let result = n1 + n2;
  return `${n1} + ${n2} = ${result}`;
}

add();
add100(20);
add100(30);
sum(30, 40);
sum(30, 40);
console.log(sum2(40, 50));
console.log(sum2(40, 50));
