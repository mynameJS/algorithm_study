// 둘만의 암호
// https://school.programmers.co.kr/learn/courses/30/lessons/155652

function solution(s, skip, index) {
  var answer = "";
  const Alphabet = "abcdefghijklmnopqrstuvwxyz";
  const skippedAlphabet = Array.from(Alphabet).filter((i) => !skip.includes(i));
  for (let i = 0; i < s.length; i++) {
    let newIndex = skippedAlphabet.indexOf(s[i]) + index;
    if (newIndex >= skippedAlphabet.length) {
      answer += skippedAlphabet[newIndex % skippedAlphabet.length];
    } else {
      answer += skippedAlphabet[newIndex];
    }
  }
  return answer;
}
