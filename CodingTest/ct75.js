// 홀수 개수 출력하기

// n개의 정수 배열 arr가 있습니다. 배열 내 홀수의 개수를 출력하는 함수를 완성하세요

function solution(arr) {
  const odd = arr.filter((i) => i % 2 === 1);
  return odd.length;
}
