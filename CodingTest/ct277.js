// 저주의 숫자 3
// https://school.programmers.co.kr/learn/courses/30/lessons/120871

function solution(n) {
  const withoutThree = Array(300)
    .fill()
    .map((_, i) => i + 1)
    .filter((number) => {
      const vStr = [...String(number)].filter((str) => str === "3").length;
      if (number % 3 === 0 || vStr !== 0) {
        return false;
      } else {
        return true;
      }
    });
  return withoutThree[n - 1];
}
