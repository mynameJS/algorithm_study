// 대충 만든 자판
// https://school.programmers.co.kr/learn/courses/30/lessons/160586

function solution(keymap, targets) {
  var answer = [];
  for (let i = 0; i < targets.length; i++) {
    let count = 0;
    for (let j = 0; j < targets[i].length; j++) {
      let minIndex = Infinity; // 더 큰 값인 Infinity로 초기화
      for (let l = 0; l < keymap.length; l++) {
        if (keymap[l].includes(targets[i][j])) {
          if (minIndex > keymap[l].indexOf(targets[i][j]) + 1) {
            minIndex = keymap[l].indexOf(targets[i][j]) + 1;
          }
        }
      }
      if (minIndex === Infinity) {
        count = -1;
        break; // 작성할 수 없는 문자열이므로 더 이상 계산하지 않고 종료
      } else {
        count += minIndex;
      }
    }
    answer.push(count);
  }
  return answer;
}
