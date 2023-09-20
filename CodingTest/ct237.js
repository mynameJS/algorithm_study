// 배열 조각하기
// https://school.programmers.co.kr/learn/courses/30/lessons/181893

function solution(arr, query) {
  const answer = [...arr];
  for (let i = 0; i < query.length; i++) {
    if (i % 2 === 0) {
      answer.splice(query[i] + 1);
    } else {
      answer.splice(0, query[i]);
    }
  }

  return answer;
}
