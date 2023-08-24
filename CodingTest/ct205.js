// 간단한 논리 연산
// https://school.programmers.co.kr/learn/courses/30/lessons/181917

function solution(x1, x2, x3, x4) {
  const res1 = x1 || x2;
  const res2 = x3 || x4;
  return res1 && res2;
}
