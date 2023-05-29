// 푸드 파이트 대회
// https://school.programmers.co.kr/learn/courses/30/lessons/134240

function solution(food) {
  var answer = "";
  for (let i = 1; i < food.length; i++) {
    for (let j = 0; j < Math.floor(food[i] / 2); j++) {
      answer += i + "";
    }
  }
  return answer + "0" + answer.split("").reverse().join("");
}
