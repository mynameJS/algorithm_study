// 무작위로 K개의 수 뽑기
// https://school.programmers.co.kr/learn/courses/30/lessons/181858

function solution(arr, k) {
  const answer = [];
  for (let i = 0; i < arr.length; i++) {
    if (!answer.includes(arr[i])) {
      if (answer.length < k) {
        answer.push(arr[i]);
      }
    }
  }
  if (answer.length < k) {
    let lackCount = k - answer.length;
    while (lackCount !== 0) {
      answer.push(-1);
      lackCount--;
    }
  }

  return answer;
}
