// 등차수열의 특정한 항만 더하기
// https://school.programmers.co.kr/learn/courses/30/lessons/181931

function solution(a, d, included) {
  const result = 0;
  for (let i = 0; i <= included.length; i++) {
    if (included[i]) {
      result += a + d * i;
    }
  }
  return result;
}
