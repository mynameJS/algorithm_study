// 마지막 두 원소
// https://school.programmers.co.kr/learn/courses/30/lessons/181927

// prettier-ignore
function solution(num_list) {
  return [...num_list, num_list.at(-1) > num_list.at(-2) ? num_list.at(-1) - num_list.at(-2) : num_list.at(-1) * 2];
}
