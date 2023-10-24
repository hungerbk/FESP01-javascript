// 배열 생성
var arr = [300, 400];

// push: 배열의 마지막에 새로운 요소 추가.
arr[2] = 500;
arr.push(600);

// unshift: 배열의 처음에 새로운 요소 추가.
// arr[0] = 200; // 기존의 값이 변경됨. 추가가 아니라 교체
arr.unshift(200);
arr.unshift(100);

// pop: 배열의 마지막 요소를 제거 후 반환
console.log(arr[arr.length - 1]); // 원본은 그대로 남아있고 그 값을 꺼냄
console.log(arr.pop()); //기존 값을 제거하고 값을 꺼냄
console.log(arr.pop());

// shift: 배열의 첫번째 요소를 제거 후 반환
console.log(arr.shift());
console.log(arr.shift());

console.log(arr);
