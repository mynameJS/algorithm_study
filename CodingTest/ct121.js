// 제로베이스 코딩테스트

/*

문자열 s가 주어질 때 연속해서 같은 문자가 2번 나올 경우 두 문자를 제거한다.
반복해서 중복된 문자를 제거했을 때 남는 문자열을 출력하라

예를 들어, 'abccba' 의 경우 'c'를 제거 하면 'abba'가 되고 'b'를 제거하면 'aa'가 되고 'a'를 제거하면 '' 빈문자열이 된다.

*/

function solution(s) {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    if (stack.length > 0 && stack[stack.length - 1] === s[i]) {
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }

  return stack.join("");
}
