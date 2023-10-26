// 배열에 min() 추가
Array.prototype.min = function () {
  return Math.min(...this);
};
