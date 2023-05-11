// 문자열 다루기 기본
// https://school.programmers.co.kr/learn/courses/30/lessons/12918

function solution(s) {
  const onlyNumStr = s.replace(/[^0-9]/g, "");
  if (s.length === 4 || s.length === 6) {
    if (s.length === onlyNumStr.length) {
      return true;
    }
  } else {
    return false;
  }
  return false;
}
