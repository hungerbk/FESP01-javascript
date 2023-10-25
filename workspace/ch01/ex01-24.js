// 전개 연산자
var colors = ["two", "three", "four"];
// 아래처럼 하면 같은 주소를 참조하기 때문에 같은 변수, 리렌더링X
// var newColors = colors;
// colors.unshift("one");
// newColors.push("five");
var newColors = ["one", ...colors, "five"];

console.log(newColors, newColors === colors); // ['one', 'two', 'three', 'four', 'five'] false
// true. 참조형 데이터는 주소가 같은지를 확인하는 것(var newColors = colors;)

if (colors !== newColors) {
  console.log("리렌더링");
}

var user = { name: "김철수", age: 30, done: false };
// var newUser = { ...user, phone: "0212345678", age: user.age + 1 }; // 기존 값에 추가/기존 값을 변경할 수도 있음. 같은 속성을 두번 선언하면 뒤에 나온 값이 덮어쓰기 때문
var newUser = { ...user, done: true };

console.log(newUser, newUser === user);
if (user !== newUser) {
  console.log("리렌더링");
}

// 함수에서 사용
function sum(x, y) {
  console.log(x + y);
}

var numbers = [10, 20];
sum(numbers[0], numbers[1]);
sum(...numbers);

// 배열 결합
var arr1 = [100, 200];
var arr2 = [300, 400, 500];
var arr3 = [...arr1, ...arr2];

console.log(arr3);

// 객체 결합
var obj1 = { _id: 1, title: "JavaScript 공부", done: false };
var obj2 = { _id: 2, content: "열심히 해야지!!", date: "2023-10-25" };
var obj3 = { ...obj1, ...obj2 }; // 중복 속성은 뒤에 있는 값으로 덮어씌워짐
console.log(obj3);
