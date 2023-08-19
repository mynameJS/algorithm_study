// 빈 배열에 추가, 삭제하기
// https://school.programmers.co.kr/learn/courses/30/lessons/181860

function solution(arr, flag) {
  const answer = [];
  for (let i = 0; i < flag.length; i++) {
    if (flag[i]) {
      for (let j = 0; j < arr[i] * 2; j++) {
        answer.push(arr[i]);
      }
    } else {
      answer.splice(-arr[i], arr[i]);
    }
  }
  return answer;
}
