// 제로베이스 코딩테스트

// N 개의 자연수가 들어있는 배열 A가 주어질 때
// 모든 자연수를 아우르는 최대공약수를 구하라
// 유클리드호제법 사용

function solution(A) {
  const getGCD = (a, b) => {
    let temp = 0;
    while (b !== 0) {
      temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  };

  if (A.length === 1) return A[0];
  if (A.length === 2) return getGCD(A[0], A[1]);

  let result = getGCD(A[0], A[1]);

  for (let i = 2; i < A.length; i++) {
    result = getGCD(result, A[i]);
  }

  return result;
}
