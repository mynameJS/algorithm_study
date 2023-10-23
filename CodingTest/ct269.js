// 다항식 더하기
// https://school.programmers.co.kr/learn/courses/30/lessons/120863/solution_groups?language=javascript&type=my

function solution(polynomial) {
  const xArr = polynomial
    .split("+")
    .filter((v) => v.indexOf("x") !== -1)
    .map((v) => v.trim());
  const numArr = polynomial
    .split("+")
    .filter((v) => !isNaN(v))
    .map((v) => v.trim());
  const xSum = xArr.reduce((a, c) => (c === "x" ? a + 1 : a + parseInt(c)), 0);
  const numSum = numArr.reduce((a, c) => a + Number(c), 0);
  console.log(xSum, numSum);

  if (xSum === 1) {
    if (numSum === 0) {
      return "x";
    } else {
      return `x + ${numSum}`;
    }
  } else if (xSum === 0) {
    return `${numSum}`;
  } else {
    if (numSum === 0) {
      return `${xSum}x`;
    } else {
      return `${xSum}x + ${numSum}`;
    }
  }
}

// 처음 풀 때는 못풀고 다른 사람 코드로 공부했었는데 예외처리가 빡시긴 했지만 혼자 힘으로 풀어내었다!
