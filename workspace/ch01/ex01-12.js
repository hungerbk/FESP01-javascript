// 지정한 배열의 모든 요소를 출력한다.
function printArr(arr) {
  for (var i = 0; i < arr.length; i++) {
    console.log(i, arr[i]);
  }
}

var colorArr = ["orange", "yellow", "green"];
colorArr.push("black");
colorArr.push("white");
console.log(colorArr.shift());
console.log(colorArr.pop());
printArr(colorArr);

// 유사배열객체
//  - length 속성 추가
//  - 0부터 시작해서 1씩 증가하는 속성 추가

// arr2를 arr로 수정 => 내부에 있는 변수명도 같이 수정해야 함. 안그러면 에러 => 어떤 이름을 쓰든 내부에 영향을 안끼치게 하고 싶음 => this를 사용
// 항상 객체.메서드로 사용할 것이기 때문에 자기자신을 호출하는 this 사용!
var arr = {
  0: "orange",
  1: "yellow",
  2: "green",
  length: 3,
  push: function (elem) {
    // 맨 뒤에 지정한 엘리먼트를 추가한다
    // length를 1 증가시킨다
    // this[this.length] = elem;
    // this.length++;

    // var tmpArr = []; 이렇게 push가 실행될 때마다 의미 없는 배열을 만드는 것은 비효율 적임
    // tmpArr.push(elem); // 유사배열객체가 아닌 tmpArr에 추가함. 내부적으로 tmpArr가 this라서
    // tmpArr.push.call(this, elem);

    // TODO: prototype 단원. 배열의 모든 메서드는 Array.prototype 속성에 정의되어 있음
    Array.prototype.push.call(this, elem);
  },
  shift: function () {
    // 첫번째 요소를 삭제하고 반환한다
    // length를 1 감소시킨다
    // var first = this[0];
    // for (var i = 0; i < this.length - 1; i++) {
    //   this[i] = this[i + 1];
    // }
    // delete this[this.length - 1];
    // this.length--;
    // return first;

    Array.prototype.shift.call(this);
  },
  pop: function () {
    // 배열의 마지막 요소를 삭제 후 반환
    // length를 1 감소시킨다
    // var last = this[this.length - 1];
    // delete this[this.length - 1];
    // this.length--;
    // return last;

    Array.prototype.pop.call(this);
  },
};

arr.push("black");
arr.push("white");
console.log(arr.shift());
console.log(arr.pop());
printArr(arr);
