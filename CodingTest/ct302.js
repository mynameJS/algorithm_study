// 제로베이스 코딩테스트
// 포화 이진 트리

function solution(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= 2 % 1000000007;
    result = result % 1000000007;
  }
  return result - 1;
}
