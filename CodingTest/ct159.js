// 배열 만들기 1
// https://school.programmers.co.kr/learn/courses/30/lessons/181901

function solution(n, k) {
  const answer = [];
  while (n >= 1) {
    if (n % k === 0) {
      answer.push(n);
    }
    n--;
  }
  return answer.sort((a, b) => a - b);
}
