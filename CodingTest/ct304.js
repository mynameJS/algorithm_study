// 제로베이스 코딩테스트
// 문자열이 주어질 때  중복을 제외한 단어의 수를 정수로 반환

function solution(s) {
  return new Set(s.split(" ")).size;
}
