// 문자열 나누기
// https://school.programmers.co.kr/learn/courses/30/lessons/140108

function solution(s) {
  var answer = 0;
  let sameCount = 0;
  let notSameCount = 0;
  let startStr = null;
  for (let i = 0; i < s.length; i++) {
    if (startStr === null) {
      startStr = s[i];
      sameCount++;
    } else if (s[i] === startStr) {
      sameCount++;
    } else {
      notSameCount++;
    }
    if (sameCount === notSameCount) {
      sameCount = 0;
      notSameCount = 0;
      startStr = null;
      answer++;
    }
  }
  if (sameCount !== 0 || notSameCount !== 0) answer++;
  return answer;
}
