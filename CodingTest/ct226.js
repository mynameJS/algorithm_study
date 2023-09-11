// 배열 만들기 6
// https://school.programmers.co.kr/learn/courses/30/lessons/181859

function solution(arr) {
  let stk = [];
  let i = 0;
  while (i < arr.length) {
    if (stk.length === 0) {
      stk = [...stk, arr[i]];
      i++;
    } else {
      if (stk.at(-1) === arr[i]) {
        stk.pop();
        i++;
      } else {
        stk = [...stk, arr[i]];
        i++;
      }
    }
  }
  return stk.length ? stk : [-1];
}
