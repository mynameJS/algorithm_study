// 날짜 비교하기
// https://school.programmers.co.kr/learn/courses/30/lessons/181838

function solution(date1, date2) {
  return new Date(...date1) - new Date(...date2) < -1 ? 1 : 0;
}

// Date 객체로 푸는문제 처음봤네..
