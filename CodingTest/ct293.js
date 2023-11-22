// 제로베이스 코딩테스트

// 문자열로 받은 숫자와 덧셈, 뺼셈으로 이루어진 계산식의 계산결과를 출력하라

function solution(s) {
  let result = 0;
  let num = "";
  let operator = true;
  [...s].forEach((v) => {
    if (!isNaN(v)) {
      num += v;
    } else {
      if (operator) {
        result += Number(num);
        num = "";
        operator = v === "+" ? true : false;
      } else {
        result -= Number(num);
        num = "";
        operator = v === "+" ? true : false;
      }
    }
  });

  if (operator) {
    result += Number(num);
  } else {
    result -= Number(num);
  }
  return result;
}
