// 소수 판별하기
// 주어진 자연수 n이 1과 자기 자신으로만 나누어지는지 여부를 출력하세요.

// 자연수가 소수인지 판별할 때 자연수의 제곱근까지만 판별하면 소수인지 알 수 있다는 것을 이용하여 풀음
function solution(n) {
  var answer = true;
  for (let i = 2; i <= Math.ceil(Math.sqrt(n)); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return answer;
}
