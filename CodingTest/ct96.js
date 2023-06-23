// 덧칠하기
// https://school.programmers.co.kr/learn/courses/30/lessons/161989

function solution(n, m, section) {
  let count = 1;
  let currentIndex = section[0] + (m - 1);
  for (let i = 1; i < section.length; i++) {
    if (section[i] > currentIndex) {
      count++;
      currentIndex = section[i] + (m - 1);
    } else continue;
  }
  return count;
}
