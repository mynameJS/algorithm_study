// 9로 나눈 나머지
// https://school.programmers.co.kr/learn/courses/30/lessons/181914

function solution(number) {
  return [...number].reduce((a, c) => a + Number(c), 0) % 9;
}
