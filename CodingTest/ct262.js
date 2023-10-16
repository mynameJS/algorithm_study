// 그림 확대
// https://school.programmers.co.kr/learn/courses/30/lessons/181836

function solution(picture, k) {
  let answer = [];
  picture.forEach((v) => {
    let expand = "";
    v.split("").forEach((v2) => (expand += v2.repeat(k)));
    answer = [...answer, ...Array(k).fill(expand)];
  });
  return answer;
}

// 이전보다 훨씬 짧고 간결하게 작성하게 되어서 기분이 조타
