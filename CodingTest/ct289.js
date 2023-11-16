// 제로베이스 코딩테스트
// 스택 관련 문제
// 각 괄호들은 서로 짝이 있으며 그 짝은 괄호가 열리고 닫히는 것을 의미한다.
// 짝이 모두 맞아 괄호가 모두 닫히는 문자열 구분

function solution(S) {
  const stack = [];
  const closedBrackets = "({[<";
  for (let i = S.length - 1; i >= 0; i--) {
    if (stack.length && closedBrackets.includes(S[i])) {
      if (S[i] === "(" && stack.at(-1) === ")") {
        stack.pop();
        continue;
      }
      if (S[i] === "{" && stack.at(-1) === "}") {
        stack.pop();
        continue;
      }
      if (S[i] === "[" && stack.at(-1) === "]") {
        stack.pop();
        continue;
      }
      if (S[i] === "<" && stack.at(-1) === ">") {
        stack.pop();
        continue;
      }
      return 0;
    } else {
      stack.push(S[i]);
    }
  }
  return stack.length ? 0 : 1;
}
