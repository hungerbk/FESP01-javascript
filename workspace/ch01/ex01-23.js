// 함수의 매개변수에 적용(마지막 매개변수에 하나만 사용가능)
// function fn(a, b, ...args, c) {
// function fn(a, b, ...args, ...rest) {
function fn(a, b, ...args) {
  console.log(a, b, args);
}

fn();
fn(1);
fn(2, 3);
fn(4, 5, 6);
fn(7, 8, 9, 10, 11);

// 구조 분해 할당에서 사용
var [first, second, ...rest] = [100, 200, 300, 400, 500];
console.log(first, second, rest);

var user = {
  name: "김철수",
  age: 30,
  phone: "02123455678",
  address: "서울특별시 종로구 종로3길 17 D타워, 16-17층 (주)멋쟁이사자처럼",
};

var { name, age, ...etc } = user; // 객체는 배열이 아니라 갤체로 만들어짐!!
console.log(name, age, etc, etc.phone);
