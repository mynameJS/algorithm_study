// JadenCase 문자열 만들기
// https://school.programmers.co.kr/learn/courses/30/lessons/12951

function solution(s) {
  const arr = s
    .split(" ")
    .map((v) => (v === "" ? v : v[0].toUpperCase() + v.toLowerCase().slice(1)))
    .join(" ");
  return arr;
}

// Lv.2 는 정답률 순으로 나열 했을 때 70% 대 부터 나오는구나...
// 입출력 예 외에 제한 조건으로 숨겨진 예외 케이스를 따지는 경우가 많아서 문제를 더 자세히 봐야할 것 같다.
