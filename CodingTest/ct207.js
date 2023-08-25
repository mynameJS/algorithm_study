// 1로 만들기
// https://school.programmers.co.kr/learn/courses/30/lessons/181880

function solution(num_list) {
  let count = 0;
  num_list.forEach((v) => {
    while (v > 1) {
      if (v % 2) {
        v = (v - 1) / 2;
        count++;
      } else {
        v /= 2;
        count++;
      }
    }
  });
  return count;
}
