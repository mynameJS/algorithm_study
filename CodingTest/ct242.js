// 최솟값 만들기
// https://school.programmers.co.kr/learn/courses/30/lessons/12941

function solution(A, B) {
  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);
  return A.reduce((a, c, i) => a + c * B[i], 0);
}
