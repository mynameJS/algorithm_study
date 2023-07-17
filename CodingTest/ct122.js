// 제로베이스 코딩테스트

/*

()
{}
[]
<>

이렇게 짝이 있는 괄호가 있다고 가정할 때

위 괄호로 이루어진 문자열 S가 주어지고
여는 괄호와 닫는 괄호가 각각 짝에 맞춰 존재할 경우 1을, 짝이 맞지 않는다면 0을 출력하라

*/

function solution(S) {
  const convertNum = Array.from(S).map((v) => {
    if (v === "(" || v === ")") {
      return 1;
    } else if (v === "{" || v === "}") {
      return 2;
    } else if (v === "[" || v === "]") {
      return 3;
    } else if (v === "<" || v === ">") {
      return 4;
    }
  });

  const stack = [];

  for (let i = 0; i < convertNum.length; i++) {
    stack.push(convertNum[i]);
    if (stack.at(-1) === stack.at(-2)) {
      stack.splice(stack.length - 2, 2);
    }
  }
  return stack.length ? 0 : 1;
}
