// 꼬리 문자열
// https://school.programmers.co.kr/learn/courses/30/lessons/181841

function solution(str_list, ex) {
  return str_list.reduce((a, c) => {
    if (!c.includes(ex)) return a + c;
    return a;
  }, "");
}
