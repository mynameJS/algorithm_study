// 수 조작하기 2
// https://school.programmers.co.kr/learn/courses/30/lessons/181925

function solution(numLog) {
  let result = "";

  const strMatchingLog = {
    1: "w",
    "-1": "s",
    10: "d",
    "-10": "a",
  };

  for (let i = 0; i < numLog.length; i++) {
    if (i + 1 === numLog.length) break;
    const changeLog =
      numLog[i] < numLog[i + 1]
        ? Math.abs(numLog[i] - numLog[i + 1])
        : Math.abs(numLog[i] - numLog[i + 1]) * -1;
    result += strMatchingLog[changeLog];
  }

  return result;
}
