// 카드 뭉치
// https://school.programmers.co.kr/learn/courses/30/lessons/159994

function solution(cards1, cards2, goal) {
  var answer = "";
  let count = 0;
  for (let i = 0; i < goal.length; i++) {
    if (goal[i] === cards1[0]) {
      count++;
      cards1.shift();
    }
    if (goal[i] === cards2[0]) {
      count++;
      cards2.shift();
    }
  }
  return (answer = goal.length === count ? "Yes" : "No");
}
