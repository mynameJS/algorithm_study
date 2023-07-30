// n 보다 커질 때까지 더하기
// https://school.programmers.co.kr/learn/courses/30/lessons/181884

function solution(numbers, n) {
  var answer = 0;
  for (let i = 0; i < numbers.length; i++) {
    answer += numbers[i];
    if (answer > n) return answer;
  }
  return answer;
}
