// 0 떼기
// https://school.programmers.co.kr/learn/courses/30/lessons/181847

function solution(n_str) {
  // const regex = /^0+/;
  // return n_str.replace(regex, '');
  if (n_str[0] !== "0") return n_str;
  for (let i = 0; i < n_str.length; i++) {
    if (n_str[i] === "0" && n_str[i + 1] !== "0")
      return n_str.substring(i + 1, 10);
  }
}
