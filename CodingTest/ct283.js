// 제로베이스 코딩테스트
// 자연수 A, B 가 주어질 때 소인수분해 시 공통된 소인수로만 이루어졌는지 판단

function solution(A, B) {
  const factorization = (num) => {
    const pfs = new Set();
    for (let i = 2; i <= num; i++) {
      while (num % i === 0) {
        pfs.add(i);
        num /= i;
      }
    }
    return pfs;
  };
  const a = [...factorization(A)];
  const b = [...factorization(B)];

  return a.every((v, i) => v === b[i]) ? 1 : 0;
}
