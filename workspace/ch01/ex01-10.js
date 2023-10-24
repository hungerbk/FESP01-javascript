// 배열을 잘 활용하면 스택과 큐를 구현하여 사용할 수 있음. 자바스크립트에서 기본으로 제공하는 것은 아님. 자바에서는 스택, 큐가 기본으로 제공되는 객체임

var stack = [];
// 100, 200, 300 저장
stack.push(100);
stack.push(200);
stack.push(300);

// 큰 차이는 아니지만, unshifit()를 사용하면 기존 값들의 모든 위치를 변경해야 하고
// push()를 사용하는 경우에는 기존 값들은 그대로 두고 뒤에 추가만 하면 되기 때문에
// 성능에서 약간의 차이가 있을 수 있다.

// 300, 200, 100 출력
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());

var queue = [];
// 100, 200, 300 저장
queue.push(100);
queue.push(200);
queue.push(300);

// 100, 200, 300 출력
console.log(queue.shift());
console.log(queue.shift());
console.log(queue.shift());

console.log(stack, queue);
