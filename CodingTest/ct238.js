// 주사위 게임 3
// https://school.programmers.co.kr/learn/courses/30/lessons/181916

function solution(a, b, c, d) {
  const onlyOneNumsArr = [...new Set([a, b, c, d])];
  const add1 = [a, b, c, d].reduce((a, c) => a + c);
  const add2 = onlyOneNumsArr.reduce((a, c) => a + c);

  if (onlyOneNumsArr.length === 1) {
    // 네 숫자가 모두 같을 때
    return 1111 * a;
  }
  if (onlyOneNumsArr.length === 4) {
    // 네 숫자가 모두 다를 때
    return Math.min(...onlyOneNumsArr);
  }
  if (onlyOneNumsArr.length === 3) {
    // 2개만 같고 다른 2개가 다를 때
    const duplicatedNum = Math.abs(add1 - add2);
    const filterArr = onlyOneNumsArr.filter((v) => v !== duplicatedNum);
    return filterArr[0] * filterArr[1];
  }
  if (onlyOneNumsArr.length === 2) {
    // 3개 중복 or 2개 중복일 때
    if (add1 % add2 === 0) {
      // 2개 중복일 때
      return (
        (onlyOneNumsArr[0] + onlyOneNumsArr[1]) *
        Math.abs(onlyOneNumsArr[0] - onlyOneNumsArr[1])
      );
    } else {
      // 3개 중복일 때
      const dice = [a, b, c, d];
      dice.sort((a, b) => a - b);
      if (dice.indexOf(dice[0]) === dice.lastIndexOf(dice[0])) {
        return (10 * dice[1] + dice[0]) ** 2;
      } else {
        return (10 * dice[0] + dice.at(-1)) ** 2;
      }
    }
  }
}
