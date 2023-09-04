// 문자열 묶기
// https://school.programmers.co.kr/learn/courses/30/lessons/181855

function solution(strArr) {
  const countLen = {};
  strArr.forEach((v) => {
    if (countLen[v.length] === undefined) {
      countLen[v.length] = 1;
    } else {
      countLen[v.length]++;
    }
  });

  return Math.max(...Object.values(countLen));
}
