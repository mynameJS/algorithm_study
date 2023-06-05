// 추억점수
// https://school.programmers.co.kr/learn/courses/30/lessons/176963

function solution(name, yearning, photo) {
  var answer = [];
  const yearn = {};

  for (let i = 0; i < name.length; i++) {
    yearn[name[i]] = yearning[i];
  }

  for (let i = 0; i < photo.length; i++) {
    let sum = 0;
    for (let j = 0; j < photo[i].length; j++) {
      if (yearn.hasOwnProperty(photo[i][j])) {
        sum += yearn[photo[i][j]];
      }
    }
    answer.push(sum);
  }

  return answer;
}
