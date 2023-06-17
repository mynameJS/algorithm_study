// [1차] 다트 게임
// https://school.programmers.co.kr/learn/courses/30/lessons/17682

function solution(dartResult) {
  // 정규식을 이용한 문자열 잘라서 배열로 만들기...정규식 버리고싶다
  const dartReulstToArr = dartResult.match(/(\d+)([^0~9][*#]?)/g);

  let result1 = dartReulstToArr[0][1] === "0" ? 10 : +dartReulstToArr[0][0];
  let result2 = dartReulstToArr[1][1] === "0" ? 10 : +dartReulstToArr[1][0];
  let result3 = dartReulstToArr[2][1] === "0" ? 10 : +dartReulstToArr[2][0];

  for (let i = 0; i < dartReulstToArr[0].length; i++) {
    if (dartReulstToArr[0][i] === "D") {
      result1 **= 2;
    }
    if (dartReulstToArr[0][i] === "T") {
      result1 **= 3;
    }
    if (dartReulstToArr[0][i] === "*") {
      result1 *= 2;
    }
    if (dartReulstToArr[0][i] === "#") {
      result1 *= -1;
    }
  }

  for (let i = 0; i < dartReulstToArr[1].length; i++) {
    if (dartReulstToArr[1][i] === "D") {
      result2 **= 2;
    }
    if (dartReulstToArr[1][i] === "T") {
      result2 **= 3;
    }
    if (dartReulstToArr[1][i] === "*") {
      result1 *= 2;
      result2 *= 2;
    }
    if (dartReulstToArr[1][i] === "#") {
      result2 *= -1;
    }
  }

  for (let i = 0; i < dartReulstToArr[2].length; i++) {
    if (dartReulstToArr[2][i] === "D") {
      result3 **= 2;
    }
    if (dartReulstToArr[2][i] === "T") {
      result3 **= 3;
    }
    if (dartReulstToArr[2][i] === "*") {
      result3 *= 2;
      result2 *= 2;
    }
    if (dartReulstToArr[2][i] === "#") {
      result3 *= -1;
    }
  }

  return result1 + result2 + result3;
}
