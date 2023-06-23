// 기사단원의 무기
// https://school.programmers.co.kr/learn/courses/30/lessons/136798

function solution(number, limit, power) {
  const divLength = [];

  for (let i = 1; i <= number; i++) {
    let divisor = 0;

    for (let j = 1; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        divisor++;

        if (j !== i / j) {
          divisor++;
        }
      }
    }

    if (divisor > limit) {
      divLength.push(power);
    } else {
      divLength.push(divisor);
    }
  }

  const answer = divLength.reduce((a, c) => a + c, 0);
  return answer;
}
