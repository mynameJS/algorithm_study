// 특별한 이차원 배열 1
// https://school.programmers.co.kr/learn/courses/30/lessons/181833

function solution(n) {
  return Array(n)
    .fill([])
    .map((v1, i1) =>
      Array(n)
        .fill(0)
        .map((v2, i2) => (i1 === i2 ? 1 : v2))
    );
}

// 와..이렇게 처음써본다. 이차원배열을 생성할 때 for문 안쓰고 처음풀어봄
