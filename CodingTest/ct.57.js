// 최대공약수와 최소공배수
// https://school.programmers.co.kr/learn/courses/30/lessons/12940

function solution(n, m) {
  const nm = n * m;
  let answer = [];
  let rest = 0;
  // 유클리드 호제법
  if (n > m) {
    while (m != 0) {
      rest = n % m;
      n = m;
      m = rest;
    }
    answer.push(n, nm / n);
    return answer;
  } else {
    while (n != 0) {
      rest = m % n;
      m = n;
      n = rest;
    }
    answer.push(m, nm / m);
    return answer;
  }
  return answer;
}
