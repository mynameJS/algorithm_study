// 제로베이스 코딩테스트
// 반복되지 않는 가장 긴 문자열 출력하기

function solution(s) {
  let alp = "";
  let maxLen = 0;
  let startIdx = 0;

  for (let i = 0; i < s.length; i++) {
    if (!alp.includes(s[i])) {
      alp += s[i];
    } else {
      maxLen = alp.length > maxLen ? alp.length : maxLen;
      i = s.indexOf(s[i], startIdx) + 1;
      startIdx = i;
      alp = s[i];
    }
  }

  maxLen = alp.length > maxLen ? alp.length : maxLen;

  return maxLen;
}
