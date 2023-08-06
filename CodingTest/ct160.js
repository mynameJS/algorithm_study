// 배열 비교하기
// https://school.programmers.co.kr/learn/courses/30/lessons/181856

function solution(arr1, arr2) {
  const sum = (arr) => arr.reduce((a, c) => a + c);
  return arr1.length > arr2.length
    ? 1
    : arr1.length === arr2.length
    ? sum(arr1) > sum(arr2)
      ? 1
      : sum(arr1) === sum(arr2)
      ? 0
      : -1
    : -1;
}

// 삼항연산자 중첩 연습해보았읍니다
