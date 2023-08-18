// 배열 만들기 5
// https://school.programmers.co.kr/learn/courses/30/lessons/181912

function solution(intStrs, k, s, l) {
  return intStrs
    .filter((v) => +v.slice(s, s + l) > k)
    .map((v) => +v.slice(s, s + l));
}
