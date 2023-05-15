// 3진법 뒤집기
// https://school.programmers.co.kr/learn/courses/30/lessons/68935

function solution(n) {
  let answer = 0;
  let three = [];
  while (n >= 3) {
    three.unshift(n % 3);
    n = parseInt(n / 3);
  }
  if (n <= 2) {
    three.unshift(n);
  }
  for (let i = 0; i < three.length; i++) {
    answer += Math.pow(3, i) * three[i];
  }
  return answer;
}

// toString에 내장된 함수로 진법이 변환가능하지만 알고리즘을 직접짜서 구현해보았다.
