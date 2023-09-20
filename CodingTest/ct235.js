// 배열 만들기 2
// https://school.programmers.co.kr/learn/courses/30/lessons/181921

function solution(l, r) {
  let answer = [];
  for (let i = l; i <= r; i++) {
    const test = (i + "").replaceAll("5", "").replaceAll("0", "");
    if (test === "") {
      answer = [...answer, i];
    }
  }
  return answer.length ? answer : [-1];
}
