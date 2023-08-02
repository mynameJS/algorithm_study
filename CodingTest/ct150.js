// 이어 붙인 수
// https://school.programmers.co.kr/learn/courses/30/lessons/181928

function solution(num_list) {
  var answer = 0;
  const odd = num_list.filter((e) => e % 2);
  const even = num_list.filter((e) => !(e % 2));
  return Number(odd.join("")) + Number(even.join(""));
}
