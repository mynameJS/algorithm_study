// 수열과 구간 쿼리 4
// https://school.programmers.co.kr/learn/courses/30/lessons/181922

function solution(arr, queries) {
  const result = [...arr];
  for (let i = 0; i < queries.length; i++) {
    for (let j = queries[i][0]; j <= queries[i][1]; j++) {
      if (j % queries[i][2] === 0) {
        result[j] += 1;
      }
    }
  }
  return result;
}
