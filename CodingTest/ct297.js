// 제로베이스 코딩테스트
// 문자열 배열 arr 가 있다. 이 문자열들의 공통된 문자를 오름차순으로 출력하는 함수를 구하라 (숫자로 이루어진 문자열 버전)

/**
 * @param arr {string[]}
 * @returns {string[]}
 */
function solution(arr) {
  const answer = new Set();
  const len = arr.length;
  const sortedArr = arr.map((string) =>
    [...string].sort((a, b) => Number(a) - Number(b))
  );
  sortedArr[0].forEach((number) => {
    const filterLen = arr.filter((string) => string.includes(number)).length;
    if (len === filterLen) answer.add(number);
  });
  return [...answer];
}
