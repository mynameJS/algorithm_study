// 글자 지우기
// https://school.programmers.co.kr/learn/courses/30/lessons/181900

function solution(my_string, indices) {
  return [...my_string].filter((_, i) => !indices.includes(i)).join("");
}
