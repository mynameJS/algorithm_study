// 뒤에서 5등까지
// https://school.programmers.co.kr/learn/courses/30/lessons/181853

function solution(num_list) {
  return num_list.sort((a, b) => a - b).slice(0, 5);
}
