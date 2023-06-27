// 옹알이(2)
// https://school.programmers.co.kr/learn/courses/30/lessons/133499

function solution(babbling) {
  let answer = 0;
  const canSay = ["aya", "ye", "woo", "ma"];
  for (let i in babbling) {
    for (let j in canSay) {
      if (
        babbling[i].includes(canSay[j]) &&
        !babbling[i].includes(canSay[j].repeat(2))
      ) {
        babbling[i] = babbling[i].replace(new RegExp(canSay[j], "gi"), "X");
      }
    }
    babbling[i] = babbling[i].replace(/X/gi, "");
    if (babbling[i].length === 0) {
      answer++;
    }
  }
  return answer;
}
