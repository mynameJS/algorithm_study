// 전국 대회 선발 고사
// https://school.programmers.co.kr/learn/courses/30/lessons/181851

function solution(rank, attendance) {
  const canAtt = rank.filter((v, i) => attendance[i]);
  canAtt.sort((a, b) => a - b);
  return (
    10000 * rank.indexOf(canAtt[0]) +
    100 * rank.indexOf(canAtt[1]) +
    rank.indexOf(canAtt[2])
  );
}
