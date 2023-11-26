// 제로베이스 코딩테스트
// 문자열 배열 arr가 있다. 이 문자열들의 공통된 문자를 오름차순으로 출력하는 함수를 출력하라(중복 제거)

/**
 * @param arr {string[]}
 * @returns {string[]}
 */
function solution(arr) {
  const answer = new Set();
  const len = arr.length;
  const sortedArr = arr.map((string) => [...string].sort());
  sortedArr[0].forEach((alp) => {
    const filterLen = arr.filter((string) => string.includes(alp)).length;
    if (len === filterLen) answer.add(alp);
  });
  return [...answer];
}
