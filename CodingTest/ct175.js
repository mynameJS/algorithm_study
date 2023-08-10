// 순서 바꾸기
// https://school.programmers.co.kr/learn/courses/30/lessons/181891

function solution(num_list, n) {
  return [...num_list.slice(n, 30), ...num_list.slice(0, n)];
}
