// 정사각형으로 만들기
// https://school.programmers.co.kr/learn/courses/30/lessons/181830

function solution(arr) {
  var answer = [...arr];
  const rowLen = arr.length;
  const colLen = arr[0].length;
  const addZero = Math.abs(rowLen - colLen);

  if (rowLen > colLen) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < addZero; j++) {
        answer[i].push(0);
      }
    }
  } else if (rowLen < colLen) {
    for (let i = 0; i < addZero; i++) {
      const addArr = Array(colLen).fill(0);
      answer.push(addArr);
    }
  }

  return answer;
}
