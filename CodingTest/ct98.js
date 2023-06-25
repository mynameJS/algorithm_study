// 로또 최고 순위와 최저 순위
// https://school.programmers.co.kr/learn/courses/30/lessons/77484

function solution(lottos, win_nums) {
  const result = [];

  const currectNums = lottos.filter((i) => win_nums.includes(i));
  const unknownNums = lottos.filter((i) => i === 0);

  const luckyGuy = currectNums.length + unknownNums.length;
  const unluckyGuy = currectNums.length;

  switch (luckyGuy) {
    case 0:
    case 1:
      result.push(6);
      break;
    case 2:
      result.push(5);
      break;
    case 3:
      result.push(4);
      break;
    case 4:
      result.push(3);
      break;
    case 5:
      result.push(2);
      break;
    case 6:
      result.push(1);
      break;
  }

  switch (unluckyGuy) {
    case 0:
    case 1:
      result.push(6);
      break;
    case 2:
      result.push(5);
      break;
    case 3:
      result.push(4);
      break;
    case 4:
      result.push(3);
      break;
    case 5:
      result.push(2);
      break;
    case 6:
      result.push(1);
      break;
  }
  return result;
}
