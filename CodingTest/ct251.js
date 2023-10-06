// 예상 대진표
// https://school.programmers.co.kr/learn/courses/30/lessons/12985

function solution(n, a, b) {
  let round = 0;
  while (a !== b) {
    a = Math.ceil(a / 2);
    b = Math.ceil(b / 2);
    round++;
  }

  return round;
}

// 각 선수의 처음 번호 / 2 를  계속 반복하여 같은 번호를 획득하는 라운드를 취득
