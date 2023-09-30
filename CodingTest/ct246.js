// 다음 큰 숫자
// https://school.programmers.co.kr/learn/courses/30/lessons/12911

function solution(n) {
  const binaryOneCount = (string) =>
    string.toString(2).replace(/0/gi, "").length;
  const nOneCount = binaryOneCount(n);
  let result = n + 1;
  while (true) {
    const resultOneCount = binaryOneCount(result);

    if (resultOneCount === nOneCount) {
      break;
    }
    result++;
  }
  return result;
}
