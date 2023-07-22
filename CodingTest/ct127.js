// 최댓값과 최솟값
// https://school.programmers.co.kr/learn/courses/30/lessons/12939

function solution(s) {
  const sArr = s.split(" ").sort((a, b) => a - b);
  return `${sArr[0]} ${sArr.at(-1)}`;
}

// 드디어 Lv.2 입성...!
