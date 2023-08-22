// 수열과 구간 쿼리 3
// https://school.programmers.co.kr/learn/courses/30/lessons/181924

function solution(arr, queries) {
  for (let i = 0; i < queries.length; i++) {
    const temp = arr[queries[i][0]];
    arr[queries[i][0]] = arr[queries[i][1]];
    arr[queries[i][1]] = temp;
  }
  return arr;
}
