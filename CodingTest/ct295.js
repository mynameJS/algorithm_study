// 제로베이스 코딩테스트
// N 개의 정수가 배열 arr로 주어졌을 때, 이 중 3개의 숫자를 골라 이 숫자들의 변의 길이로 하여 삼각형을 만들고자 한다.
// 가장 긴 둘레를 가진 삼각형을 구하라

function solution(arr) {
  arr.sort((a, b) => b - a);
  for (let i = 0; i < arr.length - 2; i++) {
    const [a, b, c] = arr.slice(i, i + 3);
    if (a + b > c && a + c > b && b + c > a) {
      return a + b + c;
    }
  }
  return 0;
}
