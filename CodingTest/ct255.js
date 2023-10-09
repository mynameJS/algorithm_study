// 분수의 덧셈
// https://school.programmers.co.kr/learn/courses/30/lessons/120808

function solution(numer1, denom1, numer2, denom2) {
  let top = numer1 * denom2 + numer2 * denom1;
  let bot = denom1 * denom2;

  for (let i = top; i >= 2; i--) {
    if (top % i === 0 && bot % i === 0) {
      top = top / i;
      bot = bot / i;
    }
  }
  return [top, bot];
}

// retry
