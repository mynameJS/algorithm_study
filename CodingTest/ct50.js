// 수박수박수박수박수박수?
// https://school.programmers.co.kr/learn/courses/30/lessons/12922

function solution(n) {
  let answer = "";
  const waterMelon = "수박";
  if (n % 2 === 0) {
    for (let i = 0; i < n / 2; i++) {
      answer += waterMelon;
    }
  } else {
    for (let j = 0; j < Math.floor(n / 2); j++) {
      answer += waterMelon;
    }
  }
  return n % 2 === 0 ? answer : answer + "수";
}
