// 제로베이스 코딩테스트

/* 1과 0으로 이루어진 2차원 배열이 주어지면, 1으로 연결되어 있는 부분을 찾아야 합니다.
상하좌우가 모두 0으로 이루어져 있다면, 분리되어 있는 곳으로 판단할 수 있습니다.
1으로 이루어진 구역의 개수를 측정해서 반환해주세요.
*/

/**
 * @param grid {array}
 * @return int
 */
function solution(grid) {
  const isIsland = (i, j) =>
    i >= 0 &&
    i < grid.length &&
    j >= 0 &&
    j < grid[i].length &&
    grid[i][j] === "1";

  const bfs = (i, j) => {
    const queue = [[i, j]];

    while (queue.length) {
      const [i, j] = queue.shift();

      grid[i][j] = "0";

      if (isIsland(i + 1, j)) queue.push([i + 1, j]);
      if (isIsland(i, j + 1)) queue.push([i, j + 1]);
      if (isIsland(i - 1, j)) queue.push([i - 1, j]);
      if (isIsland(i, j - 1)) queue.push([i, j - 1]);
    }
  };

  let counter = 0;

  for (let i = 0; i < grid.length; i += 1) {
    for (let j = 0; j < grid[i].length; j += 1) {
      if (grid[i][j] === "1") {
        counter += 1;
        bfs(i, j);
      }
    }
  }

  return counter;
}
