// 제일 작은 수 제거하기
// https://school.programmers.co.kr/learn/courses/30/lessons/12935

function solution(arr) {
  const minValueInArr = Math.min(...arr);
  const answer = arr.filter((value, arr) => {
    return value !== minValueInArr;
  });
  return answer.length ? answer : [-1];
}
