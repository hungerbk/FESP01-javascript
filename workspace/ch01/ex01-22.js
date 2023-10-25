// TODO: hoisting 단원 => 같은 함수 명을 선언하면 함수가 재할당

function sum(a, b = 0) {
  return a + b;
}
console.log(sum(10, 20)); // 아래에서 선언한 함수가 실행됨(호이스팅). 에러발생 => 아래 함수에 고유한 코드 블럭을 만들어서 일단 에러 해결
console.log(sum(30));

// TODO: IIFE pattern
// 다른 호이스팅 블록을 가짐
(function () {
  // 구조분해할당과 같이 사용
  function sum([x = 0, y = 0] = []) {
    //넘어오는 값이 없으면 빈 배열로 세팅
    // [x + y] = [1, 2]
    return x + y;
  }
  console.log(sum([1, 2]));
  console.log(sum()); // 값 자체가 오지 않을 경우를 대비하여 기본 값을 빈 배열로 세팅
  console.log(sum([])); // 값이 없는 경우를 생각하여 x, y기본값 세팅
  console.log(sum([1]));
})();

(function () {
  // 이런 초기값 세팅 과정이 없을 때는 if문을 사용해서 했음. 이제 그런 불필요한 과정은 필요없다..!
  function sum({ x = 0, y = 0 } = {}) {
    return x + y;
  }

  console.log(sum());
  console.log(sum({}));
  console.log(sum({ x: 4 }));
  console.log(sum({ x: 4, y: 6 }));
})();
