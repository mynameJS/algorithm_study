// 제로베이스 코딩테스트

function solution(A) {
  let maxProfit = 0;
  let profit = 0;
  for (let i = 0; i < A.length; i++) {
    for (let j = i + 1; j < A.length; j++) {
      profit = A[i] - A[j];
      if (profit > maxProfit) continue;
      else {
        maxProfit = profit;
      }
    }
  }
  return -maxProfit;
}
