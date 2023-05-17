// 이상한 문자 만들기
// https://school.programmers.co.kr/learn/courses/30/lessons/12930

function solution(s) {
  let answer = "";
  let sArr = s.split(" ");

  for (let i = 0; i < sArr.length; i++) {
    for (let j = 0; j < sArr[i].length; j++) {
      if (j % 2 === 0) {
        answer += sArr[i][j].toUpperCase();
      } else {
        answer += sArr[i][j].toLowerCase();
      }
    }
    if (i !== sArr.length - 1) {
      // 마지막 단어가 아니라면 공백 추가
      answer += " ";
    }
  }

  return answer;
}
