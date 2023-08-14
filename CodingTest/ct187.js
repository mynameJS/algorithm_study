// 주사위 게임 2
// https://school.programmers.co.kr/learn/courses/30/lessons/181930

function solution(a, b, c) {
  if (a !== b && b !== c && a !== c) {
    return a + b + c;
  } else if (
    (a === b && b !== c) ||
    (b === c && c !== a) ||
    (c === a && a !== b)
  ) {
    return (a + b + c) * (a ** 2 + b ** 2 + c ** 2);
  }
  return (a + b + c) * (a ** 2 + b ** 2 + c ** 2) * (a ** 3 + b ** 3 + c ** 3);
}
