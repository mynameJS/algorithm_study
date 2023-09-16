// 문자열 겹쳐쓰기
// https://school.programmers.co.kr/learn/courses/30/lessons/181943

function solution(my_string, overwrite_string, s) {
  const answer = [...my_string];
  answer.splice(s, overwrite_string.length, ...overwrite_string);

  return answer.join("");
}
