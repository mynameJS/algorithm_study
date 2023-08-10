// 홀수 vs 짝수
// https://school.programmers.co.kr/learn/courses/30/lessons/181887

function solution(num_list) {
  const even = num_list.reduce((a, c, i) => (i % 2 !== 0 ? a + c : a), 0);
  const odd = num_list.reduce((a, c, i) => (i % 2 === 0 ? a + c : a), 0);
  return Math.max(odd, even);
}
