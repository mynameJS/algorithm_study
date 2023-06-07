// 자연수 n의 약수 갯수 찾기

function solution(n) {
  const divisor = [];
  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      divisor.push(i);
      if (i !== n / i) {
        divisor.push(n / i);
      }
    }
  }
  return divisor.length;
}

// n 의 제곱근 까지 n과 나눠지는 수 찾고
// 찾은 수를 또 n에 나눠서 나오는 수 찾아서
// 중복 제거 후 갯수파악
