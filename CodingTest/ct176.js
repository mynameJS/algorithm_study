// 할 일 목록
// https://school.programmers.co.kr/learn/courses/30/lessons/181885

function solution(todo_list, finished) {
  return todo_list.filter((v, i) => !finished[i]);
}
