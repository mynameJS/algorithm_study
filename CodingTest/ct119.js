// 제로베이스 코딩테스트
// 문자열 s 가 주어졌을 때 가장 처음으로 2번 등장한 알파벳을 출력하시오. 없다면 빈문자열을 출력하시오
// 문자열 s 는 모두 소문자이다.
// 예시) 'google' 에서 가장 처음 2번 등장한 알파벳은 'o' 이다.

function solution(s) {
  const count = {};
  for (let i = 0; i < s.length; i++) {
    if (count[s[i]]) {
      count[s[i]]++;
    } else {
      count[s[i]] = 1;
    }

    if (count[s[i]] === 2) {
      return s[i];
    }
  }
  return "";
}
