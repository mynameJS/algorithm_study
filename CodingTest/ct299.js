// 제로베이스 코딩테스트
// 재난지원금
function solution(arr) {
  const targetIncomeList = arr.sort((a, b) => a - b).slice(1, arr.length - 1);
  return Math.floor(
    targetIncomeList.reduce((a, c) => a + c) / targetIncomeList.length
  );
}
