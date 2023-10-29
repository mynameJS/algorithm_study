// 삼각형의 완성조건(2)
// https://school.programmers.co.kr/learn/courses/30/lessons/120868

function solution(sides) {
  sides.sort((a, b) => a - b);
  const sum = sides[0] + sides[1];
  let count = 0;
  // 기존에 주어진 선분 중 가장 긴 변이 있을 경우
  const maxLen = sides[1];
  for (let i = 1; i <= maxLen; i++) {
    if (sides[0] + i > maxLen) count++;
  }
  // 기존에 주어진 선분 중 가장 긴 변이 없을 경우
  for (let i = maxLen + 1; i <= sum; i++) {
    if (sum > i) count++;
  }
  return count;
}
