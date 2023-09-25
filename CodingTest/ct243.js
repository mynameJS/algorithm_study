// 올바른 괄호
// https://school.programmers.co.kr/learn/courses/30/lessons/12909

function solution(s) {
  let answer = true;
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] == "(") count++;
    else count--;

    if (count < 0) {
      answer = false;
      break;
    }

    if (count > s.length - i) {
      answer = false;
      break;
    }
  }

  if (count != 0) {
    answer = false;
  }

  return answer;
}

/*

풀이방법 :
'(' 괄호는 +1, ')' 괄호는 -1 로 하여, 최종적으로 합(bracket)이 0 이면 된다.

단,

중간에 bracket이 -1 로 넘어가는 순간 이것은 닫을 수 없는 괄호가 되므로, false
bracket 이 어느 양수 일때, 계산해야 할 남은 괄호의 수가 그것보다 작으면, 완성할 수 없는 괄호이므로, 그 시점에서 false
계산이 완료되었을 때, 0이 아니면 false

*/

// 효율성 테스트가 너무 타이트하게 짜여져 있는지 같은 코드임에도 불구하고 통과했다가 실패 했다가 왔다 갔다 했음...
