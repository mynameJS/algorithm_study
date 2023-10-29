// 안전지대
// https://school.programmers.co.kr/learn/courses/30/lessons/120866

function solution(board) {
  if (board.length === 1) {
    return board[0][0] === 1 ? 0 : 1;
  }

  const maxIdx = board.length - 1;
  const minIdx = 0;
  const initBoard = Array(maxIdx + 1)
    .fill()
    .map((v) => Array(maxIdx + 1).fill(0));
  for (let col = 0; col < maxIdx + 1; col++) {
    for (let row = 0; row < maxIdx + 1; row++) {
      // 지뢰 발견
      if (board[col][row] === 1) {
        // 우측 하단
        if (col === maxIdx && row === maxIdx) {
          initBoard[col][row] = 1;
          initBoard[col][row - 1] = 1;
          initBoard[col - 1][row] = 1;
          initBoard[col - 1][row - 1] = 1;
          // 우측 상단
        } else if (col === minIdx && row === maxIdx) {
          initBoard[col][row] = 1;
          initBoard[col][row - 1] = 1;
          initBoard[col + 1][row] = 1;
          initBoard[col + 1][row - 1] = 1;
          // 좌측 하단
        } else if (col === maxIdx && row === minIdx) {
          initBoard[col][row] = 1;
          initBoard[col - 1][row] = 1;
          initBoard[col][row + 1] = 1;
          initBoard[col - 1][row + 1] = 1;
          // 좌측 상단
        } else if (col === minIdx && row === minIdx) {
          initBoard[col][row] = 1;
          initBoard[col][row + 1] = 1;
          initBoard[col + 1][row] = 1;
          initBoard[col + 1][row + 1] = 1;
          // 제일 윗 벽(완)
        } else if (col === minIdx && row !== minIdx && row !== maxIdx) {
          initBoard[col][row] = 1;
          initBoard[col][row - 1] = 1;
          initBoard[col][row + 1] = 1;
          initBoard[col + 1][row] = 1;
          initBoard[col + 1][row - 1] = 1;
          initBoard[col + 1][row + 1] = 1;
          // 오른쪽 벽(완)
        } else if (row === maxIdx && col !== maxIdx && col !== minIdx) {
          initBoard[col][row] = 1;
          initBoard[col - 1][row] = 1;
          initBoard[col + 1][row] = 1;
          initBoard[col][row - 1] = 1;
          initBoard[col - 1][row - 1] = 1;
          initBoard[col + 1][row - 1] = 1;
          // 왼쪽 벽(완)
        } else if (row === minIdx && col !== minIdx && col !== maxIdx) {
          initBoard[col][row] = 1;
          initBoard[col - 1][row] = 1;
          initBoard[col + 1][row] = 1;
          initBoard[col][row + 1] = 1;
          initBoard[col - 1][row + 1] = 1;
          initBoard[col + 1][row + 1] = 1;
          // 맨 아래 벽
        } else if (col === maxIdx && row !== minIdx && row !== maxIdx) {
          initBoard[col][row] = 1;
          initBoard[col][row - 1] = 1;
          initBoard[col][row + 1] = 1;
          initBoard[col - 1][row] = 1;
          initBoard[col - 1][row - 1] = 1;
          initBoard[col - 1][row + 1] = 1;
          // 내부 지뢰
        } else {
          initBoard[col][row] = 1;
          initBoard[col][row + 1] = 1;
          initBoard[col][row - 1] = 1;
          initBoard[col][row] = 1;
          initBoard[col - 1][row] = 1;
          initBoard[col - 1][row - 1] = 1;
          initBoard[col - 1][row + 1] = 1;
          initBoard[col + 1][row] = 1;
          initBoard[col + 1][row + 1] = 1;
          initBoard[col + 1][row - 1] = 1;
        }
      }
    }
  }
  return initBoard.reduce((a, c) => a + c.filter((v) => v === 0).length, 0);
}

// 모든 경우의 수를 찾아 적용시켜보았다...
