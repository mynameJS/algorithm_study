// 제로베이스 코딩테스트
// d로 나눠지는 num 배열 안의 숫자 요소 쌍 갯수 찾기

const factorial = (num) => (num === 1 ? 1 : num * factorial(num - 1));

function solution(nums, d) {
  const uniqNums = [...new Set(nums)].filter((v) => v % d === 0);
  const pairs = uniqNums.map(
    (pair) => nums.filter((num) => num === pair).length
  );
  return pairs.reduce((a, c) => (c > 1 ? a + factorial(c - 1) : a), 0);
}
