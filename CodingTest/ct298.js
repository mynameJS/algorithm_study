// 제로베이스 코딩테스트
// 라이프 수치가 적혀있는 카드 뭉치가 있습니다. 게임 규칙은 두 명의 참가자가 카드 뭉치에서 라이프가 가장 높은 카드 한 장씩 뽑습니다. 서로 뽑은 카드의 라이프 수치를 갖고 겨룹니다.

function solution(n) {
  while (n.length > 1) {
    n.sort((a, b) => a - b);
    const x = n.pop();
    const y = n.pop();
    if (x > y) {
      n.push(x - y);
    } else if (x < y) {
      n.push(y - x);
    }
  }
  const result = n[0] || 0;
  return result;
}
