// var alert = "출입 금지!"; // 전역에 alert이 있기 때문에 에러
// console.log(alert);

// alert이라는 변수는 안 만들었지만, fn이라는 기명 함수 생성(전역)
function fn() {
  var alert = "출입 금지!";
  console.log(alert);
}
fn();

(function () {
  var alert = "출입 금지!";
  console.log(alert);
})();

// 매개변수 전달
function fn2(alert) {
  console.log(alert);
}
alert("출입 금지!!");

((alert) => {
  console.log(alert);
})("출입금지!!!");

alert("작업 완료.");
