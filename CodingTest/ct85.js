// 과일 장수
// https://school.programmers.co.kr/learn/courses/30/lessons/135808

function solution(k, m, score) {
  score.sort((a, b) => b - a);
  let answer = 0;
  let average = [];
  if (score.length < m) return 0;
  for (let i = 0; i < score.length; i++) {
    average.push(score[i]);
    if (average.length === m) {
      answer += Math.min(...average) * m;
      average = [];
    }
  }
  return answer;
}
