var num = 100; // number
var str = "hello"; // string
var obj = {}; // object
var arr = [num, str]; // object(array)

// 함수를 변수에 할당
var foo = function () {
  console.log(this); // window, obj, arr, obj => 같은 코드지만 호출에 따라서 다른 값을 출력함.
  return "I am foo.";
};

// 함수를 배열의 요소로 할당
arr.push(obj);
arr.push(foo);

// 함수를 객체의 속성으로 할당(메소드)
obj.bar = foo;
obj.baz = function () {
  return "I am baz.";
};

// foo라는 함수는 메모리 하나만 차지하지만, 다양한 참조값을 가짐. 다양한 방법으로 호출할 수 있음
console.log(foo(), obj.bar(), arr[3](), arr[2].bar());
