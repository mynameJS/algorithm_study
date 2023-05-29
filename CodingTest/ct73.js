// 콜라 문제
// https://school.programmers.co.kr/learn/courses/30/lessons/132267

function solution(a, b, n) {
  let answer = 0;
  while (n >= a) {
    let inputColas = Math.floor(n / a) * a; // 갖다 주는 콜라
    let outputColas = Math.floor(n / a) * b; // 갖다 줄 때 받는 콜라
    n = n - inputColas + outputColas; // 현재 콜라
    answer += outputColas; // 총 받은 콜라
  }
  return answer;
}
