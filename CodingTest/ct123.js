// 바탕화면 정리
// https://school.programmers.co.kr/learn/courses/30/lessons/161990

function solution(wallpaper) {
  const xCord = [];
  const yCord = [];
  for (let i = 0; i < wallpaper.length; i++) {
    for (let j = 0; j < wallpaper[i].length; j++) {
      if (wallpaper[i][j] === "#") {
        xCord.push(i);
        yCord.push(j);
      }
    }
  }
  const result = [
    Math.min(...xCord),
    Math.min(...yCord),
    Math.max(...xCord) + 1,
    Math.max(...yCord) + 1,
  ];
  return result;
}
