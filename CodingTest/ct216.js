// 조건에 맞게 수열 변환하기 2
// https://school.programmers.co.kr/learn/courses/30/lessons/181881

function solution(arr) {
  const repeatArr = (curArr) =>
    curArr.map((v, i) => {
      if (v >= 50 && v % 2 === 0) {
        return v / 2;
      } else if (v < 50 && v % 2 === 1) {
        return v * 2 + 1;
      } else {
        return v;
      }
    });

  let preArr = [...arr];
  let curArr = repeatArr(preArr);
  let count = 0;

  while (!preArr.every((v, i) => v === curArr[i])) {
    preArr = curArr;
    curArr = repeatArr(curArr);
    count++;
  }

  return count;
}
