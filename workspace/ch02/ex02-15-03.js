// ex02-15.js 복사
var count = 0;
var counter = {
  count: 0,
  visit: function () {
    // 방문자를 한명 증가시킨다.
    this.count++; // this = counter
    var visit2 = () => {
      // 화살표 함수는 this가 없음. 전달되지 않음.
      // 외부(상위)에 있는 this를 찾는다
      this.count++; // this = counter
    };
    visit2();
  },
};

counter.visit();
counter.visit();
console.log("합계", counter.count);
