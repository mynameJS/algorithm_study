// 제로베이스 코딩테스트
// 낱말 게임

function solution(p, s) {
  const pattern = p.split("");
  const response = s.split(" ");
  const data = {};

  if (new Set(pattern).size !== new Set(response).size) return false;

  for (let i = 0; i < p.length; i++) {
    if (!data[pattern[i]]) {
      data[pattern[i]] = response[i];
    } else {
      if (data[pattern[i]] !== response[i]) {
        return false;
      }
    }
  }
  return true;
}
