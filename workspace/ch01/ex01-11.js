var arr = [300, 400];
arr[2] = 500;
arr.unshift(200);
arr.unshift(100);

console.log(arr);

// 배열의 모든 요소 출력(for)
console.log("for");
for (var i = 0; i < arr.length; i++) {
  console.log(i, arr[i]);
}

// 배열의 모든 요소 출력(for-in)
// 배열도 객체이기 때문에 for-in을 쓸 수 있음
// 객체처럼 속성-값 쌍을 지정하는 것이 아니라, 0부터 1씩 증가하는 속성(인덱스)을 갖고 있고 length 속성을 기본으로 갖고 있는, 전용 메소드(e.i. pop())를 갖고 있는 특별한 역할의 객체다
console.log("for-in");
for (var i in arr) {
  console.log(i, arr[i]);
}

// 배열의 모든 요소 출력(for-of)
console.log("for-of");
for (var elem of arr) {
  console.log(elem);
}

// 배열의 모든 요소 출력(forEach())
console.log("forEach()");
arr.forEach(function (elem, i) {
  console.log(i, elem);
});
