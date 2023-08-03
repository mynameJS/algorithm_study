// 주사위 게임 1
// https://school.programmers.co.kr/learn/courses/30/lessons/181839

function solution(a, b) {
  return a % 2 === 1 && b % 2 === 1
    ? a ** 2 + b ** 2
    : a % 2 === 1 || b % 2 === 1
    ? (a + b) * 2
    : Math.abs(a - b);
}
