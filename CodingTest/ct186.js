// 문자열 잘라서 정렬하기
// https://school.programmers.co.kr/learn/courses/30/lessons/181866

function solution(myString) {
  return myString.replace(/x+/g, " ").trim().split(" ").sort();
}
