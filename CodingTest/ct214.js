//  2의 영역
// https://school.programmers.co.kr/learn/courses/30/lessons/181894

function solution(arr) {
  const result = arr.slice(arr.indexOf(2), arr.lastIndexOf(2) + 1);
  return result.length ? result : [-1];
}
