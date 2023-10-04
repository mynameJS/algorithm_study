// 점프와 순간 이동
// https://school.programmers.co.kr/learn/courses/30/lessons/12980

function solution(n) {
  let usage = 0;
  while (n !== 0) {
    if (n % 2 === 0) {
      n /= 2;
    } else {
      n--;
      usage++;
    }
  }
  return usage;
}

// 결국 홀 수 일때 에너지 사용이 1 필요하므로 짝수 확인 후 /2 계속해주다가 홀수가 되면 -1을 해서 짝수로 만들고 에너지사용량 +1 해주었음
