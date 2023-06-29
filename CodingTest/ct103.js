// 조건에 맞게 수열 반환하기 1
// https://school.programmers.co.kr/learn/courses/30/lessons/181882\

function solution(arr) {
  const result = arr.map((i) => {
    if (i >= 50 && i % 2 === 0) {
      return i / 2;
    } else if (i < 50 && i % 2 === 1) {
      return i * 2;
    } else {
      return i;
    }
  });
  return result;
}
