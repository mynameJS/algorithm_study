// l 로 만들기
// https://school.programmers.co.kr/learn/courses/30/lessons/181834

function solution(myString) {
  return Array.from(myString)
    .map((v) => (v < "l" ? "l" : v))
    .join("");
}
