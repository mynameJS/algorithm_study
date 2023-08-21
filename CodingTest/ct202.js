// 특정 문자열로 끝나는 가장 긴 부분 문자열 찾기
// https://school.programmers.co.kr/learn/courses/30/lessons/181872

function solution(myString, pat) {
  return [...myString]
    .map((_, i) => myString.slice(0, i + 1))
    .filter((v) => v.endsWith(pat))
    .at(-1);
}
