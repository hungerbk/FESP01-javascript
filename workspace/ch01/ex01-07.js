// 객체 생성
var foo = {
  name: "foo",
  major: "computer science",
};
// 객체 프로퍼티 읽기
console.log(foo.name, foo["major"], foo.sub); // 다른 언어들은 없는 속성을 입력하면 에러가 발생, 자바스크립트는 undefined
console.log(foo.name.toUpperCase(), foo["major"], foo.sub /*.toUpperCase()*/); // undefined이나 null에는 . 을 찍어서 무언가를 호출할 수 없음
// 값 자체가 없는 것은 문제가 아니지만, 없는 값으로 무언가를 하려고 하면 에러가 발생함

// 객체 프로퍼티 갱신
foo.major = "electronic engineering";
console.log(foo.name.toUpperCase(), foo["major"], foo.sub /*.toUpperCase()*/);

// 객체 프로퍼티 동적 생성
foo.sub = "computer engineering";
console.log(foo.name.toUpperCase(), foo["major"], foo.sub /*.toUpperCase()*/);

// 객체 프로퍼티 삭제
delete foo.major;
console.log(foo.name.toUpperCase(), foo["major"], foo.sub /*.toUpperCase()*/);

// 객체 모든 프로퍼티 읽기
for (var prop in foo) {
  console.log(prop, foo[prop]); // 이 경우에는 대괄호만 사용할 수 있다.
}
