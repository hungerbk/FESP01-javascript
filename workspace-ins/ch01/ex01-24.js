// 전개 연산자
var colors = ['two', 'three', 'four'];
// var newColors = colors;
// colors.unshift('one');
// newColors.push('five');

var newColors = ['one', ...colors, 'five'];


console.log(newColors, colors === newColors);

if(colors !== newColors){
  console.log('리렌더링.');
}

var user = {name: '김철수', age: 30, done: false};
var newUser = {...user, done: true};

console.log(newUser, user === newUser);
if(user !== newUser){
  console.log('리렌더링.');
}

// 함수에서 사용
function sum(x, y){
  console.log(x + y);
}
var numbers = [10, 20];
sum(numbers[0], numbers[1]);
sum(...numbers);

// 배열 결합

// 객체 결합
