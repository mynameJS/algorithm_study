// 정수를 나선형으로 배치하기
// https://school.programmers.co.kr/learn/courses/30/lessons/181832

function solution(n) {
  const arr = [];
  for (let i = 0; i < n; i++) arr.push([]);

  let increaseNum = 1;
  let startRow = 0;
  let startCol = 0;
  let endRow = n - 1;
  let endCol = n - 1;

  // 지정된 범위 내에서만 반복하며, 실행 시마다 범위를 좁힘
  while (startRow <= endRow && startCol <= endCol) {
    // 우측으로 이동, 시작 행은 아래로 한칸 내려옴
    for (let i = startCol; i <= endCol; i++) {
      arr[startRow][i] = increaseNum++;
    }
    startRow++;

    // 하단으로 이동, 끝나는 열은 한칸 왼쪽으로 줄어듦
    for (let i = startRow; i <= endRow; i++) {
      arr[i][endCol] = increaseNum++;
    }
    endCol--;

    // 좌측으로 이동, 끝나는 행은 위로 한칸 줄어듦
    for (let i = endCol; i >= startCol; i--) {
      arr[endRow][i] = increaseNum++;
    }
    endRow--;

    // 상단으로 이동, 시작 열은 우측으로 한칸 줄어듦
    for (let i = endRow; i >= startRow; i--) {
      arr[i][startCol] = increaseNum++;
    }
    startCol++;
  }
  return arr;
}
