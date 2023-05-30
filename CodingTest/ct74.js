// 가장 가까운 글자
// https://school.programmers.co.kr/learn/courses/30/lessons/142086

function solution(s) {
  var answer = [];
  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) === i) {
      answer.push(-1);
    } else {
      let nearIndex = 0;
      for (let j = 0; j < i; j++) {
        if (s[j] === s[i]) {
          nearIndex = j;
        }
      }
      answer.push(i - nearIndex);
    }
  }
  return answer;
}

// 나중에 다시풀어보자.....
