// 조건 문자열
// https://school.programmers.co.kr/learn/courses/30/lessons/181934

function solution(ineq, eq, n, m) {
  const operations = {
    ">=": (n, m) => n >= m,
    "<=": (n, m) => n <= m,
    ">!": (n, m) => n > m,
    "<!": (n, m) => n < m,
  };

  const op = operations[ineq + eq];
  return Number(op(n, m));
}
