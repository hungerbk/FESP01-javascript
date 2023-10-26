// 고등학교 성적관리 생성자 함수(총점과 평균 계산)
function HighSchool(kor, eng) {
  this.kor = kor;
  this.eng = eng;
}

HighSchool.prototype.sum = function () {
  return this.kor + this.eng;
};
HighSchool.prototype.avg = function () {
  return this.sum() / 2;
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
College.prototype = new HighSchool(); // College의 프로토타입을 new Highschool로 한 것
College.prototype.constructor = College; // 프로토타입과 컨스트럭터는 상호참조해야 함
//
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
