// ex02-14.js 복사
var name = "global";
function returnName() {
  return this.name;
}

// 일반적인 함수로 호출(함수명())
console.log(returnName()); //global

// 객체의 메소드로 호출(객체.메소드명())
var kim = new Object();
kim.name = "김철수";
kim.age = 30;
kim.getName = returnName;

var lee = {
  name: "이영희",
  age: 40,
  getName: returnName,
};

// 객체를 생성해서 반환하는 함수(생성자)

// 아래는 그냥 함수
// function Person(name, age) {
//   var obj = {};
//   obj.name = name;
//   obj.age = age;
//   obj.getName = function(){
//     return this.name
//   };
//   return obj;
// }

// 이게 생성자 함수
function Person(name, age) {
  // new Person()으로 생성하면 Person의 인스턴스임
  if (!(this instanceof Person)) {
    return new Person(name, age); // new를 입력하지 않은 경우, new를 추가해서 다시 호출(재귀호출)
  }

  this.name = name;
  this.age = age;
  this.getName = function () {
    return this.name;
  };
}

var kim = new Person("김철수", 30);
var lee = new Person("이영희", 35); // 이게 생성자 함수 호출(new)
var hong = Person("홍길동", 40); //이건 그냥 함수 호출

console.log(kim.age, kim.getName());
console.log(lee.age, lee.getName());
console.log(hong.age, hong.getName()); // error => if문 추가하여 해결

// this call, apply
console.log(kim.getName(), kim.getName.call(window));
console.log(lee.getName(), lee.getName.apply(kim));
console.log(returnName(), returnName.call(lee));
