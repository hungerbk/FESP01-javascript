// count 속성과 ride(), getCount() 메서드 작성
var Counter = function () {
  let count = 0;
  this.ride = function () {
    if (count < 40) {
      count++;
    } else {
      console.log("정원 초과!");
    }
  };
  this.getCount = function () {
    return count;
  };
};

var c = new Counter();
c.ride();
c.ride();

// for (var i = 0; i < 40; i++) {
//   c.ride();
// }

c.count += 40; //이렇게 하면 ride 내부에 만들어둔 제약조건이 적용이 안 됨 => this를 삭제하면서 해결. 외부에서 직접 접근이 불가능함

console.log("전체 탑승자", c.getCount());
