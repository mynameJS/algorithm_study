// 예산
// https://school.programmers.co.kr/learn/courses/30/lessons/12982

function solution(d, budget) {
  let sum = 0;
  let count = 0;
  d.sort((a, b) => a - b);
  for (let i = 0; i < d.length; i++) {
    count++;
    sum += d[i];
    if (sum > budget) {
      count--;
      return count;
    }
  }
  return count;
}
