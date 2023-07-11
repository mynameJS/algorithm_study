// 제로베이스 코딩테스트
/*
사람들의 건물 출입 기록이 있는 자료구조인 배열이 있을 때  확진자와 동선이 겹치는 인원을 오름차순으로 정렬하라
배열의 요소는 사람들이 건물에 출입한 기록이 순서대로 기록되어있다.
1 이라는 사람이 들어 왔다가 건물에서 나갈 때는 -1 이 기록된다.
*/

function solution(history, infected) {
  let infectedMen = [];
  let startIndex = -1;
  let endIndex = -1;

  while (true) {
    startIndex = history.indexOf(infected, endIndex + 1);
    if (startIndex === -1) break;

    endIndex = history.indexOf(-infected, startIndex);
    if (endIndex === -1) break;

    const extracted = history.slice(startIndex + 1, endIndex);
    infectedMen = infectedMen.concat(extracted);
  }
  // const result = Array.from(new Set(infectedMen.map(i => Math.abs(i)).sort((a,b) => a-b)));
  return infectedMen === []
    ? []
    : Array.from(
        new Set(infectedMen.map((i) => Math.abs(i)).sort((a, b) => a - b))
      );
}
