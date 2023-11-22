// 제로베이스 코딩테스트
// 유명 먹방 우승자 가리기

function solution(bj, one, two) {
  const winner = bj.filter((person) => ![...one, ...two].includes(person))[0];
  const winningPrize = 150 * (one.length + two.length * 2 + 3);

  return `${winningPrize}만원(${winner})`;
}
