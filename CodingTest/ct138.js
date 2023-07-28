// n개 간격의 원소들
// https://school.programmers.co.kr/learn/courses/30/lessons/181888

function solution(num_list, n) {
  var answer = [];
  for (let i = 0; i < num_list.length; i += n) {
    answer.push(num_list[i]);
  }
  return answer;
}
