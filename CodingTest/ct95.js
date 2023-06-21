// 제로베이스 코딩테스트

function solution(num) {
  if (num === 1 || num === 5) return false;
  if (num === 2 || num === 3 || num === 4) return true;

  while (num >= 3) {
    num -= 4;
    if (num === 0 || num === 2 || num === 3) {
      return true;
    }
  }
  return false;
}
