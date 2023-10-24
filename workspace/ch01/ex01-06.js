var foo = {
  name: "lee",
  age: 35,
  job: "teacher",
  married: true,
};

console.log(foo["name"], foo.age, foo["job"], foo.married);
console.log(typeof foo);

// 객체는 자바스크립트 언어에 종속된 개념이기 때문에 이 상태로 전송할 수 없음 => string으로 변환해서 전송해야 함 => 직렬화
var strFoo = JSON.stringify(foo);
console.log(typeof strFoo, strFoo, strFoo.age); // strFoo.age는 undefined

// 데이터를 받아서 다시 객체화하여 사용해야 함(지금은 단지 문자열일 뿐임) => 역직렬화
var objFoo = JSON.parse(strFoo);
console.log(typeof objFoo, objFoo, objFoo.age);
