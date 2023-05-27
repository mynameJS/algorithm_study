// 피보나치 수열을 이용한 배열 만들기
// [1,1] 초기배열에서 전체 길이 n만큼의 피보나치 수열이 들어간 배열을 만들고 마지막 index 숫자 리턴하기

function solution(n) {
  const FbArr = [1, 1];
  for (let i = 2; i < n; i++) {
    let sum = FbArr[i - 1] + FbArr[i - 2];
    FbArr.push(sum);
    console.log("sum", sum);
    console.log("FbArr", FbArr);
  }
  return FbArr[n - 1];
}
