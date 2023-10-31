// k의 개수
// https://school.programmers.co.kr/learn/courses/30/lessons/120887

function solution(i, j, k) {
  let count = 0;
  const boundary = Array(j - i + 1)
    .fill()
    .map((_, j) => i + j);
  boundary.forEach((num) => {
    const strNum = String(num);
    count += [...strNum].filter((v) => v === String(k)).length;
  });
  return count;
}
