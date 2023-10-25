// 구조 분해 할당
var colors = ["yellow", "green", "blue"];
var [one, two, three, four] = colors;
console.log(colors[0], colors[1], colors[2]); // 어떤 의미인지 알 수 없음
console.log(one, two, three, four); // 인덱스에 맞게 할당됨. four는 undifined
// 순서에 맞게 할당됨

// 리액트
// const countState = useState(0);
// console.log(countState[0]);
// countState[1](countState[0] + 1);

// const [count, setCount] = useState(0);
// console.log(count);
// setCount(count + 1);

// var { userName, userAge: age } = { userName: "김철수", userAge: 35 };
var kim = { userName: "김철수", userAge: 35 };
console.log(kim.userName, kim.userAge);
var { userName, userAge: age } = kim; // 객체 속성에 따라 할당되는 것이기 때문에 순서는 상관 없음
console.log(userName, age);

// 선언된 변수에 적용

var first, second;
// 배열. 다른 선언 없이 사용
[first, second] = [100, 200, 300];
console.log(first, second);

// 객체는 선언문 없이 사용하면 그냥 블록으로 인식해서 에러가 발생함 => 전체를 괄호로 묶어줌
// {first, second}= {first: 'orange', second:'green', third: 'yellow'} //(X)
({ first, second } = { first: "orange", second: "green", third: "yellow" }); //(O)
console.log(first, second);

// 기본값 할당(undefined 대체)
// var { userName, userAge } = { userName: "이영희", userAge: 25 };
var { userName, userAge = 20 } = { userName: "이영희" };
var colors = ["yellow", "green", "blue"];
var [one, two, three, four = "red"] = colors;

console.log(userName, userAge);

// 변수명 변경과 기본값 할당
var { userName: accountName = "게스트", userAge: age = 20 } = { userAge: 30 };
console.log(accountName, age);

// 변수값 교환
var a = 100;
var b = 200;
var tmp = a;
a = b;
b = tmp;
console.log(a, b);

// 변수값 교환(구조 분해 할당)
[a, b] = [b, a]; // [a, b] = [100, 200]
console.log(a, b);

// 복합 객체에서 사용
var userList = [
  {
    name: "김철수",
    age: 30,
    course: {
      name: "멋사 6기",
    },
  },
  {
    name: "이영희",
    age: 35,
    course: {
      name: "멋사 8기",
    },
  },
];

// 이름과 코스명만 출력
for (var elem of userList) {
  console.log(elem.name, elem.course.name);
}

// 구조 분해 할당
for (var {
  name,
  course: { name: courseName },
} of userList) {
  console.log(name, courseName);
}
