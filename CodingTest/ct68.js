// 문자열 내 마음대로 정렬하기
// https://school.programmers.co.kr/learn/courses/30/lessons/12915

function solution(strings, n) {
  strings.sort((a, b) => {
    const strA = a.charAt(n);
    const strB = b.charAt(n);

    if (strA < strB) {
      return -1;
    } else if (strA > strB) {
      return 1;
    } else {
      for (let i = 0; i < a.length; i++) {
        let strAi = a.charAt(i);
        let strBi = b.charAt(i);
        if (strAi < strBi) {
          return -1;
        } else if (strAi > strBi) {
          return 1;
        }
      }
    }
    return 0;
  });
  return strings;
}
