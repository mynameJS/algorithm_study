// 소수 찾기
// https://school.programmers.co.kr/learn/courses/30/lessons/12921

// 에라토스테네스의 체 알고리즘 이용

function solution(n) {
  const isPrime = new Array(n + 1).fill(true); // 모든 수를 소수로 초기화
  isPrime[0] = false; // 0은 소수가 아님
  isPrime[1] = false; // 1은 소수가 아님

  for (let i = 2; i * i <= n; i++) {
    if (isPrime[i]) {
      for (let j = i * i; j <= n; j += i) {
        isPrime[j] = false; // i의 배수들은 소수가 아님
      }
    }
  }

  let count = 0;
  for (let i = 2; i <= n; i++) {
    if (isPrime[i]) {
      count++;
    }
  }

  return count;
}

// 에라토스테네스의 체 알고리즘 사용 안하고 풀어볼라 했는데 효율성검사를 도저히 통과를 못했다.....

/*
function solution(n) {
  
  let answer = 0;
  
  function primeNum(n) {
      for(let i = 2; i <= Math.sqrt(n); i++) {
          if(n % i === 0) return false;
      }
      return true;
  }
  
  for (let i = 2; i <= n; i++) {
    if ((i !== 2) && (i % 2 === 0) || (i !== 3) && (i % 3 === 0)) {
       continue;
    }
    if (primeNum(i)) {
      answer++;
    }
  }
  
  return answer;
}
*/
