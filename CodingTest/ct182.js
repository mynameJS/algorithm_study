// 간단한 식 계산하기
// https://school.programmers.co.kr/learn/courses/30/lessons/181865

function solution(binomial) {
  return eval(binomial);
}

/*
eval은 보안에 취약하므로 쓰면 안되긴함!
math.js라는 라이브러리를 쓰면 가능하긴 하지만 그걸 쓰지않고도 푸는 방법도 생각해 보았음
*/

function solution(binomial) {
  var answer = 0;
  const s = binomial.split(" ");
  const n1 = parseInt(s[0]);
  const n2 = parseInt(s[2]);

  switch (s[1]) {
    case "+":
      return n1 + n2;
    case "-":
      return n1 - n2;
    case "*":
      return n1 * n2;
  }
}
