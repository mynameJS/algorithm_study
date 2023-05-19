// 시저 암호
// https://school.programmers.co.kr/learn/courses/30/lessons/12926

function solution(s, n) {
  let answer = "";
  const lower = "abcdefghijklmnopqrstuvwxyz";
  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      answer += s[i];
    }
    for (let j = 0; j < lower.length; j++) {
      if (s[i] === lower[j]) {
        if (j + n >= lower.length) {
          answer += lower[j + n - lower.length];
        } else {
          answer += lower[j + n];
        }
      }
      if (s[i] === upper[j]) {
        if (j + n >= lower.length) {
          answer += upper[j + n - lower.length];
        } else {
          answer += upper[j + n];
        }
      }
    }
  }
  return answer;
}
