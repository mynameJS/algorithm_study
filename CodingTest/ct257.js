// 최빈값 구하기
// https://school.programmers.co.kr/learn/courses/30/lessons/120812

function solution(array) {
  const numObj = {};
  array.forEach((v) => {
    if (numObj[v]) {
      numObj[v] += 1;
    } else {
      numObj[v] = 1;
    }
  });

  const mode = Math.max(...Object.values(numObj));

  const modeFilter = Object.entries(numObj).filter((v) => v.includes(mode));

  return modeFilter.length === 1 ? +modeFilter[0][0] : -1;
}

// 다시 풀어본 문제.. 다시 풀고 예전꺼 보니까 그땐 못풀고 다른 사람 풀이 공부한 흔적이 있네..이젠..혼자...푼다....
