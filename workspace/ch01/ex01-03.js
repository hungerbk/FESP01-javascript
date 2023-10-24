var maxNum = Number.MAX_VALUE;
var maxSafeNum = Number.MAX_SAFE_INTEGER;

// BigInt
var b1 = 12345n;
var b2 = BigInt(maxSafeNum);

console.log(maxNum, maxSafeNum, b1, b2);
console.log(typeof maxNum, typeof maxSafeNum);

console.log(maxSafeNum, maxSafeNum + 1, maxSafeNum + 2, maxSafeNum + 3); //MAX_SAFE 범위가 넘어가면 오류 발생
console.log(Number.isSafeInteger(maxSafeNum), Number.isSafeInteger(maxSafeNum + 1)); //안전한 범위에 있는지 확인
// BigInt와 Number는 더할 수 없음!
console.log(b2, b2 + 1n, b2 + 2n, b2 + 3n);
