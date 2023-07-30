// 수 조작하기1
// https://school.programmers.co.kr/learn/courses/30/lessons/181926

function solution(n, control) {
  const charToValueMap = {
    w: " 1",
    s: " -1",
    d: " 10",
    a: " -10",
  };
  const convertedCtrl = control
    .replace(/[wsda]/g, (match) => charToValueMap[match])
    .trim();
  const ctrlArr = convertedCtrl.split(" ");
  return ctrlArr.reduce((a, c) => Number(a) + Number(c), n);
}

/*
정규 표현식으로 숫자인 문자열로 변환하고 공백을 이용하여 배열로 만들었음
그리고 reduce 사용해서 초기값 n 으로 두고 모든 값 더했음
*/
