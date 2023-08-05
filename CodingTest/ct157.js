// 홀짝에 따라 다른 값 반환하가
// https://school.programmers.co.kr/learn/courses/30/lessons/181935

function solution(n) {
  let answer = 0;
  if (n % 2) {
    while (n >= 1) {
      if (n % 2 === 1) {
        answer += n;
      }
      n--;
    }
  } else {
    while (n >= 1) {
      if (n % 2 === 0) {
        answer += n ** 2;
      }
      n--;
    }
  }
  return answer;
}
