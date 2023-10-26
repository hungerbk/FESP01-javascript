// ex02-15.js 복사
var count = 0;
var counter = {
  count: 0,
  visit: function () {
    // 방문자를 한명 증가시킨다.
    this.count++; // this = counter
    var visitN = function (n) {
      this.count += n; // this = counter
    };
    var visit3 = visitN.bind(this, 3); // this = counter
    // call은 바로 함수를 실행하지만(this와 인자값을 넣고 실행),
    // bind는 함수를 반환함 (this와 인자값을 넣은 함수)
    visit3();
    visit3();
  },
};

counter.visit();
counter.visit();
console.log("합계", counter.count);
