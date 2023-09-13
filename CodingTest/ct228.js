// 문자열 여러 번 뒤집기
// https://school.programmers.co.kr/learn/courses/30/lessons/181913

function solution(my_string, queries) {
  const result = [...my_string];
  queries.forEach(([a, b]) => {
    result.splice(a, Math.abs(a - b) + 1, ...result.slice(a, b + 1).reverse());
  });
  return result.join("");
}
