// 내적
// https://school.programmers.co.kr/learn/courses/30/lessons/70128

function solution(a, b) {
  var answer = 0;
  for (var i = 0; i < a.length; i++) {
    answer += a[i] * b[i];
  }
  return answer;
}
