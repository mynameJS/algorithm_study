// 세로 읽기
// https://school.programmers.co.kr/learn/courses/30/lessons/181904

function solution(my_string, m, c) {
  var answer = "";
  for (let i = 0; i < my_string.length; i += m) {
    answer += my_string.slice(i, i + m)[c - 1];
  }
  return answer;
}
