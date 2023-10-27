// 제로베이스 코딩테스트
// 주식

function solution(A) {
  const stockResults = [];
  for (let i = 0; i < A.length - 1; i++) {
    for (let j = i + 1; j < A.length; j++) {
      if (A[i] < A[j]) {
        stockResults.push(A[j] - A[i]);
      }
    }
  }
  return stockResults.length ? Math.max(...stockResults) : 0;
}
