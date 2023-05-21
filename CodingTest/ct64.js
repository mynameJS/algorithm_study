// 최소 직사각형
// https://school.programmers.co.kr/learn/courses/30/lessons/86491

// function solution(sizes) {
//     const maxNums = sizes.map((size) => Math.max(size[0], size[1]));
//     const minNums = sizes.map((size) => Math.min(size[0], size[1]));
//     return Math.max(...maxNums) * Math.max(...minNums);
// }

function solution(sizes) {
  let maxNums = [];
  let minNums = [];
  for (let i = 0; i < sizes.length; i++) {
    if (sizes[i][0] >= sizes[i][1]) {
      maxNums.push(sizes[i][0]);
      minNums.push(sizes[i][1]);
    } else {
      maxNums.push(sizes[i][1]);
      minNums.push(sizes[i][0]);
    }
  }
  return Math.max(...maxNums) * Math.max(...minNums);
}
