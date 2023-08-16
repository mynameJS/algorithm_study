// 수열과 구간 쿼리 1
// https://school.programmers.co.kr/learn/courses/30/lessons/181883

function solution(arr, queries) {
  const answer = [...arr];
  for (let i = 0; i < queries.length; i++) {
    for (let j = queries[i][0]; j <= queries[i][1]; j++) {
      answer[j] += 1;
    }
  }
  return answer;
}
