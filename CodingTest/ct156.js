// 접미사인지 확인하기
// https://school.programmers.co.kr/learn/courses/30/lessons/181908

function solution(my_string, is_suffix) {
  const suffix = [];
  for (let i = 0; i < my_string.length; i++) {
    suffix.push(my_string.substring(i, my_string.length));
  }

  return +suffix.includes(is_suffix);
}
