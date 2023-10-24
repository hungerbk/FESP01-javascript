// Symbol
var s1 = Symbol("hello");
var s2 = Symbol("world");
var s3 = Symbol("hello");

console.log(s1 === s2); //false
console.log(s2 === s3); //false
console.log(s1 === s3); //false

console.log(s1, s2, s3);

// Symbol 함수는 항상 새로운 심볼 객체를 만든다
// 함수 안의 문자열은 단순 설명(이름). 동작에는 아무런 영향을 끼치지 않는다.
// hello, world라는 값이 아니라 그냥 설명일 뿐

// Symbol.for(): 자바스크립트 엔진이 관리하는 전역 심볼 레지스트리에 저장됨
var obj = {
  hello: 10,
  world: 20,
};
obj.hello = 30; // 값이 교체가 됨
console.log(obj);

var obj2 = {
  [Symbol("hello")]: 10,
  [Symbol("world")]: 20,
};

obj2[Symbol("hello")] = 30; // 새로운 값을 반환
console.log(obj2);

// 기존 객체의 속성을 건들지 않고 새로운 속성을 만들 때 사용함! (잘 사용하지는 않음)
