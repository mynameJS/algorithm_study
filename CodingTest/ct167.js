// 더 크게 합치기
// https://school.programmers.co.kr/learn/courses/30/lessons/181939/solution_groups?language=javascript

function solution(a, b) {
  return Math.max(Number(a + "" + (b + "")), Number(b + "" + (a + "")));
}

/*
내 기준 기발한 백틱 사용법이 다른사람풀이에 있었다.
function solution(a, b) {
  return Math.max(Number(`${a}${b}`), Number(`${b}${a}`))
}
*/
