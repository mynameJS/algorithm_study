// 홀수 vs 짝수
// https://school.programmers.co.kr/learn/courses/30/lessons/181887

function solution(num_list) {
  const result = num_list.reduce(
    (a, c, i) => {
      i % 2 ? (a[0] += c) : (a[1] += c);
      return a;
    },
    [0, 0]
  );
  return Math.max(...result);
}

// 이전에도 reduce를 썻지만 홀수와 짝수의 합을 각각 reduce를 사용했다면 지금은 초기값을 배열로 주고 각각의 합을 담은 후 최대값을 구하였다.
