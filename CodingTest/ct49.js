// 가운데 글자 가져오기
// https://school.programmers.co.kr/learn/courses/30/lessons/12903

function solution(s) {
  const centerStrIndex = Math.ceil(s.length / 2) - 1;
  console.log(centerStrIndex);
  return s.length % 2 === 0
    ? s[centerStrIndex] + s[centerStrIndex + 1]
    : s[centerStrIndex];
}
