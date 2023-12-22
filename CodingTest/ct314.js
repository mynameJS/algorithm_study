// 제로베이스 코딩테스트
// 연속 합

function solution(A) {
  let sum = 0;
  let maxValue = A[0];

  for (let i = 0; i < A.length; i++) {
    maxValue = Math.max(maxValue, A[i]);
    sum = A[i];
    for (let j = i + 1; j < A.length; j++) {
      sum += A[j];
      maxValue = Math.max(maxValue, sum);
    }
  }
  return maxValue > 0 ? maxValue : 0;
}
