// 음양 더하기
// https://school.programmers.co.kr/learn/courses/30/lessons/76501

function solution(absolutes, signs) {
  let trueSum = 0;
  let falseSum = 0;
  for (let i = 0; i < signs.length; i++) {
    if (signs[i]) {
      trueSum += absolutes[i];
    } else {
      falseSum += absolutes[i];
    }
  }
  return trueSum - falseSum;
}
