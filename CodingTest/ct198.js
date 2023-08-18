// 이차원 배열 대각선 순회하기
// https://school.programmers.co.kr/learn/courses/30/lessons/181829

function solution(board, k) {
  return board
    .flatMap((row, i) => row.filter((value, j) => i + j <= k))
    .reduce((acc, curr) => acc + curr, 0);
}
