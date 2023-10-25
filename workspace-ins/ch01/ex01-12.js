// 지정한 배열의 모든 요소를 출력한다.
function printArr(arr){
  for(var i=0; i<arr.length; i++){
    console.log(i, arr[i]);
  }
}

var colorArr = ['orange', 'yellow', 'green'];
colorArr.push('black');
colorArr.push('white');
console.log(colorArr.shift());
console.log(colorArr.pop());
printArr(colorArr);

// 유사배열객체
//  - length 속성 추가
//  - 0부터 시작해서 1씩 증가하는 속성 추가
var arr2 = {
  0: 'orange',
  1: 'yellow', 
  2: 'green',
  length: 3,
  push: function(elem){
    // 맨뒤에 지정한 elem를 추가한다.
    // length를 1 증가시킨다.
    arr2[arr2.length] = elem;
    arr2.length++;
  },
  shift: function(){
    // 첫번째 요소를 삭제하고 반환한다.
    // length를 1 감소시킨다.
    var first = arr2[0];
    for(var i=0; i<arr2.length-1; i++){
      arr2[i] = arr2[i+1];
    }
    arr2.length--;
    delete arr2[arr2.length];
    return first;
  },
  pop: function(){
    // 마지막 요소를 삭제후 반환
    // length 1 감소
    var last = arr2[arr2.length-1];
    arr2.length--;
    delete arr2[arr2.length];
    return last;
  }
};
arr2.push('black');
arr2.push('white');
console.log(arr2.shift());
console.log(arr2.pop());
printArr(arr2);
// 0 orange
// 1 yellow
// 2 green
