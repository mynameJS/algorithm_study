// 제로베이스 코딩테스트
// 스택 관련 문제

// 해당 문자열에서 2회 연속으로 동일한 문자가 나타나면, 해당 두 문자를 소거한다.
// 완전히 소거되는 문자열 구분

function solution(S) {
  const stack = [];
  for (let i = 0; i < S.length; i++) {
    if (stack.length && stack.at(-1) === S[i]) {
      stack.pop();
    } else {
      stack.push(S[i]);
    }
  }
  return stack.length ? 0 : 1;
}
