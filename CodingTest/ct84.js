// 명예의 전당(1)
// https://school.programmers.co.kr/learn/courses/30/lessons/138477

function solution(k, score) {
  let best = [];
  const worst = [];
  for (let i = 0; i < score.length; i++) {
    if (i < k) {
      // 명예의 전당 자리 꽉 찰 때까지 계속 넣어주기
      best.push(score[i]);
      worst.push(Math.min(...best));
    } else {
      // 자리 만석인 상태에서 가장 낮은 점수보다 큰 점수를 받으면 교체해주기
      if (score[i] > Math.min(...best)) {
        best.sort((a, b) => a - b);
        best.shift();
        best.push(score[i]);
        worst.push(Math.min(...best));
      } else {
        worst.push(Math.min(...best));
      }
    }
  }
  return worst;
}
