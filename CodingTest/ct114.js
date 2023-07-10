// 햄버거 만들기
// https://school.programmers.co.kr/learn/courses/30/lessons/133502

function solution(ingredient) {
  var answer = 0;
  const stack = [];
  for (let i = 0; i < ingredient.length; i++) {
    stack.push(ingredient[i]);
    if (
      stack.at(-1) === 1 &&
      stack.at(-2) === 3 &&
      stack.at(-3) === 2 &&
      stack.at(-4) === 1
    ) {
      stack.splice(stack.length - 4, 4);
      answer++;
    }
  }
  return answer;
}

// stack 자료구조 형태로 문제풀이..지려따..
