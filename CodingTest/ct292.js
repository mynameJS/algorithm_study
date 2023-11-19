// 제로베이스 코딩테스트
// 스택 관련 문제
// 중위 표기법을 후위 표기법으로 바꾸기

function solution(S) {
  const priority = {
    "+": 1,
    "-": 1,
    "*": 2,
    "/": 2,
  };

  const result = [];
  const stack = [];

  const arrS = S.split(" ");

  arrS.forEach((item) => {
    if (!isNaN(item)) {
      // 피연산자 일 때
      result.push(item);
    } else {
      // 연산자 일 때
      if (item === "(" || item === ")") {
        // 괄호 부분 처리
        if (item === "(") stack.push(item);
        if (item === ")") {
          while (stack.length && stack.at(-1) !== "(") {
            result.push(stack.pop());
          }
          stack.pop();
        }
      } else {
        // +-*/ 처리
        while (stack.length && priority[stack.at(-1)] >= priority[item]) {
          result.push(stack.pop());
        }
        stack.push(item);
      }
    }
  });

  while (stack.length) {
    result.push(stack.pop());
  }
  return result.join(" ");
}

// 빡시네..
