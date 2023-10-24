// TODO: hoisting 단원. 변수 중복 선언 가능

var arr = ["zero", "one", "three", "four"];
// 추가
var arr2 = arr.splice(2, 0, "two");
console.log("arr", arr);

// splice(start[, deleteCount[, item1[, item2[, ...]]]])
// 배열의 요소를 삭제, 교체, 추가하고 제거한 요소를 담은 배열을 반환한다.
// deleteCount 생략시 마지막까지 제거

//삭제
// var arr2 = arr.splice(3, 1); // 3번 인덱스 부터 1개 삭제
// var arr2 = arr.splice(1); // 1번 인덱스 부터 끝까지 삭제
// var arr2 = arr.splice(); // 빈배열 반환

// slice([begin[, end]]) => 원본이 항상 유지된다!!!!
// 배열의 begin부터 end까지(end 미포함) 요소를 복사해서 새로운 배열을 반환한다.
// begin 생략시 0
// begin이 음수일 경우 배열의 뒤에서 부터 복사
// end 생략시 마지막까지 복사
// 원본 데이터 유지

var arr2 = arr.slice(1, 3); // 1, 2번 인덱스 복사 ['one', 'two']
var arr2 = arr.slice(-3, -1); // -3, -2 인덱스 복사 ['two', 'three']
var arr2 = arr.slice(2); //['two', 'three', 'four']
var arr2 = arr.slice(-2); //['three', 'four']
var arr2 = arr.slice(); // 전체복사 => 이 경우 값은 같더라도 참조값이 다르기 때문에 arr와 arr2는 다른 값이다!

console.log("arr", arr);
console.log("arr2", arr2);
console.log(arr == arr2);
