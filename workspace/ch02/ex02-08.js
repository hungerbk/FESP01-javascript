// 표현식 방식의 함수 생성(기명함수 사용예)
var f = function factorial(n) {
  if (n === 1) return 1;
  return n * factorial(n - 1); //f로 써도 됨. 단 그 경우에는 외부에 있는 요소를 안에 쓰는 것이라서 => 함수 외부의 요소가 함수 내부 요소에 영향을 끼치는 것은 좋지 않음. 둘 중 하나를 수정하면 둘다 바꿔야 함. 강한 결속이 생김.
};

console.log(f(5));
// console.log(factorial(5)); // error
// 5! -> 5 * 4 * 3 * 2 * 1
// 5 * 4!
// 5 * 4 * 3!
// 5 * 4 * 3 * 2!
// 5 * 4 * 3 * 2 * 1!
// 5 * 4 * 3 * 2 * 1

console.log("로또 1등 당첨 확률은 1/" + Math.round(f(45) / (f(6) * f(39))));
