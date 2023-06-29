// 제로베이스 코딩테스트
// 두 인수를 각각 소인수분해 했을 때 공통된 소수를 가지고 있다면 1 아니면 0 출력

function solution(A, B) {
  function factorize(num) {
    const result = [];
    for (let i = 2; i <= num; i++) {
      while (num % i === 0) {
        result.push(i);
        num /= i;
      }
    }
    if (num > 1) {
      result.push(num);
    }
    return result;
  }
  const Aresult = [...new Set(factorize(A))];
  const Bresult = [...new Set(factorize(B))];

  return Aresult.every((e, i) => e === Bresult[i]) ? 1 : 0;
}
