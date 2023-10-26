// ex03-04.js 복사
// 고등학교 성적관리 생성자 함수(총점과 평균 계산)
function HighSchool(kor, eng) {
  this.kor = kor;
  this.eng = eng;
}

HighSchool.prototype.sum = function () {
  return this.kor + this.eng;
};
HighSchool.prototype.avg = function () {
  return Math.round(this.sum() / 2); // 상속을 하면 여기서 수정하면 나머지도 다 적용됨. 복사해서 하면 하나하나 다 수정해야 함
};

var s1 = new HighSchool(100, 91);
console.log(s1.sum());
console.log(s1.avg());

// 대학교 성적관리 생성자 함수(총점, 평균, 학점 계산)
function College(kor, eng) {
  // this.kor = kor;
  // this.eng = eng;
  HighSchool.call(this, kor, eng); // 이렇게 하면 Highschool 내부의 this는 College의 this가 됨. 같은 속성이니까 이것도 부모 생성자 함수 이용하기
}

// College가 highschool을 상속받는다
inherite(HighSchool, College);

function inherite(Parent, Child) {
  // 03-04에서 했던 방법으로는 불필요하게 kor = undefined로 생성되는 단점이 있었다
  // let F = function () {};
  // F.prototype = Parent.prototype;
  // Child.prototype = new F();

  Child.prototype = Object.create(Parent.prototype); // 3가지 방법으로 쓸 수 있다 정도만 기억하자. 우린 안 쓸거임..!
  Child.prototype.constructor = Child;
}

College.prototype.grade = function () {
  var grade = "F";
  var avg = this.avg();
  if (avg >= 90) {
    grade = "A";
  } else if (avg >= 80) {
    grade = "B";
  } else if (avg >= 70) {
    grade = "C";
  } else if (avg >= 60) {
    grade = "D";
  }
  return grade;
};

var s2 = new College(80, 71);
console.log(s2.sum());
console.log(s2.avg());
console.log(s2.grade());
