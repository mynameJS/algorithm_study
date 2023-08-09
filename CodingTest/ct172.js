// 배열의 원소 삭제하기
// https://school.programmers.co.kr/learn/courses/30/lessons/181844

function solution(arr, delete_list) {
  return arr.filter((v) => !delete_list.includes(v));
}
