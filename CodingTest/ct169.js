// 부분 문자열 이어 붙여 문자열 만들기
// https://school.programmers.co.kr/learn/courses/30/lessons/181911

function solution(my_strings, parts) {
  return my_strings
    .map((v, i) => v.substring(parts[i][0], parts[i][1] + 1))
    .join("");
}
