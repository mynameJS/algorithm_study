// 공백으로 구분하기 2
// https://school.programmers.co.kr/learn/courses/30/lessons/181868

function solution(my_string) {
  const modifiedStr = my_string.replace(/ {2,}/g, " ").trim();
  return modifiedStr.split(" ");
}

// 공백 2개이상이면 공백 1개로 바꾸는 정규표현식 후 trim 이용해서 앞뒤 공백 자르기!
