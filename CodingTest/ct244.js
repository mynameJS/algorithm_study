// 이진 변환 반복하기
// https://school.programmers.co.kr/learn/courses/30/lessons/70129

function solution(s) {
  let xString = s;
  let runCount = 0;
  let delZeroCount = 0;

  while (xString !== "1") {
    const zeroSum = [...xString].filter((v) => v === "0").length;
    const afterLen = xString.length - zeroSum;
    delZeroCount += zeroSum;
    xString = xString.replaceAll("0", "");
    xString = afterLen.toString(2);
    runCount++;
  }

  return [runCount, delZeroCount];
}
