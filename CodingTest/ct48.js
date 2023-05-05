// 없는 숫자 더하기
// https://school.programmers.co.kr/learn/courses/30/lessons/86051

function solution(numbers) {
  const result = 45 - numbers.reduce((sum, currValue) => sum + currValue);
  return result;
}
