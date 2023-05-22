// 크기가 작은 부분문자열
// https://school.programmers.co.kr/learn/courses/30/lessons/147355

function solution(t, p) {
  var answer = 0;
  const t_arr = [];
  for (let i = 0; i < t.length; i++) {
    const slicedStr = t.substr(i, p.length);
    if (slicedStr.length === p.length) {
      t_arr.push(slicedStr);
    }
  }
  for (let i = 0; i < t_arr.length; i++) {
    if (Number(t_arr[i]) <= Number(p)) {
      answer++;
    }
  }
  console.log(t_arr);
  return answer;
}
