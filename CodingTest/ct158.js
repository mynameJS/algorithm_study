// 특정한 문자를 대문자로 바꾸기
// https://school.programmers.co.kr/learn/courses/30/lessons/181873

function solution(my_string, alp) {
  const regex = new RegExp(alp, "g");
  return my_string.replace(regex, alp.toUpperCase());
}
