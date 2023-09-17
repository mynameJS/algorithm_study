// 그림 확대
// https://school.programmers.co.kr/learn/courses/30/lessons/181836

function solution(picture, k) {
  const result = [];
  const doubleEle = Array(picture.length).fill("");

  for (let i = 0; i < picture.length; i++) {
    for (let j = 0; j < picture[i].length; j++) {
      doubleEle[i] += picture[i][j].repeat(k);
    }
  }

  for (let i = 0; i < doubleEle.length; i++) {
    let count = k;
    while (count > 0) {
      result.push(doubleEle[i]);
      count--;
    }
  }
  return result;
}
