function syncFn1() {
  console.log("syncFn1 작업 시작.");
  // ...
  console.log("syncFn1 작업 종료.");

  return "syncFn1의 결과물";
}

function syncFn2(f1Result) {
  console.log("syncFn2 작업 시작.", f1Result);
  // ...
  console.log("syncFn2 작업 종료.");

  return "syncFn2의 결과물";
}

// 동기 방식
// 함수가 시작되면 종료될 때까지 기다리고
// 그 값을 가지고 다음 코드를 실행
// 처리 환경이 길어지면 그만큼 대기해야 해서 오래 걸림
// 자바스크립트는 싱글 스레드이기 때문에 동시 작업이 되지 않음
// 사용자 입장에서는 실행이 안되다가 갑자기 주르륵 실행되는 것처럼 느껴짐 => 사용자 경험에 마이너스

// (function () {
//   const result = syncFn1();
//   syncFn2(result);
//   console.log("테스트 종료.");
// })();

// "syncFn1 작업 시작."
// "syncFn1 작업 종료."
// "syncFn2 작업 시작."
// "syncFn2 작업 종료."
// "테스트 종료."

// 비동기 => 가독성이 떨어지고 오류도 많이 발생한다
function asyncFn1(resolve) {
  console.log("asyncFn1 작업 시작.");
  setTimeout(function () {
    // ...
    console.log("asyncFn1 작업 종료.");
    // return "asyncFn1의 결과물"; // 여기에 두면 콜백 함수의 리턴
    resolve("asyncFn1의 결과물"); // resolve(콜백함수)를 써서 해결
  }, 3000);
  // return "asyncFn1의 결과물"; // 여기에 두면 setTimeout이 끝나기 전에 결과값이 나옴
}

function asyncFn2(f1Result, resolve) {
  console.log("asyncFn2 작업 시작.", f1Result);
  setTimeout(function () {
    // ...
    console.log("asyncFn2 작업 종료.");
    resolve("asyncFn2의 결과물");
  }, 2000);
}

// (function () {
//   asyncFn1(function (result) {
//     asyncFn2(result, function (f2Result) {
//       console.log(f2Result);
//     });
//   });
//   console.log("테스트 종료.");
// })();

//  asyncFn1 작업 시작.
//  테스트 종료.
//  asyncFn1 작업 종료.
//  asyncFn2 작업 시작. asyncFn1의 결과물
//  asyncFn2 작업 종료.
//  asyncFn2의 결과물

// ES6 Promise
// Promise 반환
function promiseFn1() {
  return new Promise(function (resolve, reject) {
    //resolve 성공시, reject 실패시
    console.log("promiseFn1 작업 시작.");
    setTimeout(function () {
      // ...
      console.log("promiseFn1 작업 종료.");
      resolve("promiseFn1의 결과물");
    }, 3000);
  });
}

function promiseFn2(f1Result) {
  //promiseFn1().then(promiseFn2)에서 promiseFn1()가 반환하는 Promise객체의 resolve 값을 자동으로 promiseFn2의 매개변수로 넣음
  return new Promise(function (resolve, reject) {
    console.log("promiseFn2 작업 시작.", f1Result);
    setTimeout(function () {
      // ...
      console.log("promiseFn2 작업 종료.");
      resolve("promiseFn2의 결과물");
    }, 2000);
  });
}

// (function () {
//   promiseFn1()
//     .then(promiseFn2)
//     .then(() => console.log("작업 종료."))
//     .catch((err) => console.err(err));
//   console.log("이벤트 처리 완료.");
// })();

//  promiseFn1 작업 시작.
//  이벤트 처리 완료.
//  promiseFn1 작업 종료.
//  promiseFn2 작업 시작. promiseFn1의 결과물
//  promiseFn2 작업 종료.
//  작업 종료.

// ES2017 async/await
// await은 Promise 객체를 반환할 때만 쓸 수 있음
// async와 await은 함께 써야 함
// 전체적으로는 비동기, working 내에서는 동기
// 코드는 동기 함수를 작성하듯이 작성
async function working() {
  var f1Result = await promiseFn1(); // Promise 객체 앞에 await을 붙임. resolve 상태가 될 때까지 기다림. resolve에 넘어간 값이 리턴값이 됨
  var f2Result = await promiseFn2(f1Result);
  console.log("이벤트 처리 완료.", f2Result);
}

(function () {
  working();
  console.log("작업 처리 완료.");
})();

//  promiseFn1 작업 시작.
//  작업 처리 완료.
//  promiseFn1 작업 종료.
//  promiseFn2 작업 시작. promiseFn1의 결과물
//  promiseFn2 작업 종료.
//  이벤트 처리 완료. promiseFn2의 결과물
