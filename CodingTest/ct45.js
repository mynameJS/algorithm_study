// https://school.programmers.co.kr/learn/courses/30/lessons/12948
// 핸드폰 번호 가리기

function solution(phone_number) {
  var answer = "";
  var lastFourNumber =
    phone_number[phone_number.length - 4] +
    phone_number[phone_number.length - 3] +
    phone_number[phone_number.length - 2] +
    phone_number[phone_number.length - 1];
  for (let i = 0; i < phone_number.length - 4; i++) {
    answer += "*";
  }
  return answer + lastFourNumber;
}
