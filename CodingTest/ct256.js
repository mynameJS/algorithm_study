// 홀짝에 따라 다른 값 반환하기
// https://school.programmers.co.kr/learn/courses/30/lessons/181935

function solution(n) {
  const nNum = Array(n)
    .fill()
    .map((_, index) => index + 1);
  return n % 2
    ? nNum.reduce((a, c) => (c % 2 ? a + c : a), 0)
    : nNum.reduce((a, c) => (c % 2 ? a : a + c ** 2), 0);
}

// 이전에 풀었던 문제인데 Array~~fill~~map 활용해서 깔끔하게 정리해보았다.
