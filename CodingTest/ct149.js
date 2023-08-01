// 원소들의 곱과 합
// https://school.programmers.co.kr/learn/courses/30/lessons/181929

function solution(num_list) {
  const multiplyNum = num_list.reduce((a, c) => a * c);
  const squareNum = num_list.reduce((a, c) => a + c) ** 2;
  return multiplyNum < squareNum ? 1 : 0;
}
