// TODO: hoisting 단원

// 지정한 두 값의 최대값을 반환한다.
function max(n1, n2) {
  // var maxNum;
  // let maxNum
  // const maxNum = 10; //const는 초기 값 할당을 해야 함

  if (n1 > n2) {
    var maxNum = n1;
    // var로 선언해도 바깥에서 return 할 수 있음 => 함수 스코프이기 때문에 이 함수 내에서 얼마든지 사용가능
    // 이 안에서 let 변수를 사용하면 이 블록 바깥에서는 사용할 수 없음
    // let maxNum = n1 하는 경우 바깥에서 return하는 경우 에러 발생 => if 블록 바깥에 선언
    // 상수는 값을 변경할 수 없음.
  } else {
    var maxNum = n2;
  }

  return maxNum;
}

console.log(max(10, 20)); // 20
console.log(max(200, 30)); // 200
