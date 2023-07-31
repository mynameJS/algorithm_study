// 카운트 업
// https://school.programmers.co.kr/learn/courses/30/lessons/181920

function solution(start, end) {
  const answer = [];
  while (start <= end) {
    answer.push(start);
    start++;
  }
  return answer;
}
