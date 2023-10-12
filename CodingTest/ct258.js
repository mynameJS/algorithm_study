// 주사위 게임 3
// https://school.programmers.co.kr/learn/courses/30/lessons/181916

function solution(a, b, c, d) {
  const dices = [a, b, c, d];
  const uniqNums = {};
  dices.forEach((v) => {
    if (uniqNums[v]) {
      uniqNums[v] += 1;
    } else {
      uniqNums[v] = 1;
    }
  });

  const numList = Object.entries(uniqNums);

  if (numList.length === 1) {
    return 1111 * numList[0][0];
  }
  if (numList.length === 3) {
    const filter = numList.filter((v) => v[1] === 1);
    return filter[0][0] * filter[1][0];
  }
  if (numList.length === 2) {
    const filter1 = numList.filter((v) => v[1] === 1);
    const filter2 = numList.filter((v) => v[1] === 2);
    const filter3 = numList.filter((v) => v[1] === 3);
    if (filter2.length === 0) {
      return (10 * filter3[0][0] + Number(filter1[0][0])) ** 2;
    } else {
      return (
        (Number(filter2[0][0]) + Number(filter2[1][0])) *
        Math.abs(Number(filter2[0][0]) - Number(filter2[1][0]))
      );
    }
  }

  return Math.min(a, b, c, d);
}

// 이전에는 new Set으로 풀었는데 이번에는 객체를 사용해서 풀어보았다!
