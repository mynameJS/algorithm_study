// 수열과 구간 쿼리 2
// https://school.programmers.co.kr/learn/courses/30/lessons/181923

function solution(arr, queries) {
  let answer = [];
  queries.forEach((v) => {
    const [s, e, k] = v;
    let minValue = Infinity;
    for (let i = s; i <= e; i++) {
      if (arr[i] > k) {
        if (minValue > arr[i]) {
          minValue = arr[i];
        }
      }
    }
    if (minValue === Infinity) {
      answer = [...answer, -1];
    } else {
      answer = [...answer, minValue];
    }
  });
  return answer;
}
