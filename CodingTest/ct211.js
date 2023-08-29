// 세 개의 구분자
// https://school.programmers.co.kr/learn/courses/30/lessons/181862

function solution(myStr) {
  const result = myStr
    .replace(/(a|b|c)+/g, " ")
    .trim()
    .split(" ");
  return result[0] === "" ? ["EMPTY"] : result;
}
