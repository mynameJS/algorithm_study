// 제로베이스 코딩테스트
// 스택 관련 문제
// 문자열에 연속한 2개의 같은 문자가 존재하지 않도록 만들기

function solution(s) {
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    if (stack.length && stack.at(-1) === s[i]) {
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }
  return stack.join("");
}
