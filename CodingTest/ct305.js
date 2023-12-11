// 제로베이스 코딩테스트
// 두 배열이 주어질 때 공통된 숫자를 오름차순으로 반환(배열)

function solution(arr1, arr2) {
  return arr1.filter((number) => arr2.includes(number)).sort((a, b) => a - b);
}
