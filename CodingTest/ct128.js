// 첫 번째로 나오는 음수
// https://school.programmers.co.kr/learn/courses/30/lessons/181896

function solution(num_list) {
  for (let i = 0; i < num_list.length; i++) {
    if (num_list[i] < 0) {
      return i;
    }
  }
  return -1;
}

// const solution = num_list => num_list.findIndex(v => v < 0)
//  배열 메서드인 findIndex 쓰면 더 깔끔할듯
