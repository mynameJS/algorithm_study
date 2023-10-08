// 피보나치 수
// https://school.programmers.co.kr/learn/courses/30/lessons/12945

function solution(n) {
  const answer = [];
  answer[0] = 0;
  answer[1] = 1;
  for (let i = 2; i <= n; i++) {
    answer[i] = (answer[i - 1] + answer[i - 2]) % 1234567;
  }

  return answer[n];
}

// 피보나치 수열에서 n 이 매우 큰 경우 자바스크립트가 표현할 수 있는 자료형의 범위가 넘어가기 때문에 오버플로우가 난다.
// 그래서 아래와 같은 나머지 연산의 성질을 이용해 큰 값이 되기 전에 나머지연산을 해주어 정확한 값을 구해야하는 문제였다..

/*

TIP [나머지 연산의 성질]

나머지 연산은 다음과 같은 특징을 갖고 있습니다

(a + b) % m = ((a % m) + (b % m)) % m
이를 문제에 적용하면 다음과 같습니다

F(n) % m 
= (F(n-1) + F(n-2)) % m
= (F(n-1) % m + F(n-2) % m) % m

*/
