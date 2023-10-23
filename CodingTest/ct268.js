//  이차원 배열 대각선 순회하기
// https://school.programmers.co.kr/learn/courses/30/lessons/181829

function solution(board, k) {
  return board.reduce(
    (a, c, i) => a + c.reduce((a1, c1, j) => (i + j <= k ? a1 + c1 : a1), 0),
    0
  );
}

// 2중 reduce 를 써보았다... 굳이 이럴 필요는 없지만 연습삼아 해보았음
