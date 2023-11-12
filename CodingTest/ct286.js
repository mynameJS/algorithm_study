// 제로베이스 코딩테스트
// 두 번 등장하는 문자

/**
 * @param s {string}
 * @returns {string}
 */
function solution(s) {
  const alpCount = {};
  for (const alp of s) {
    if (!alpCount[alp]) {
      alpCount[alp] = 1;
    } else {
      alpCount[alp] += 1;
      if (alpCount[alp] === 2) {
        return alp;
      }
    }
  }
  return "";
}
