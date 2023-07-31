// 배열에서 문자열 대소문자 변환하기
// https://school.programmers.co.kr/learn/courses/30/lessons/181875

function solution(strArr) {
  const answer = strArr.map((item, i) =>
    i % 2 ? item.toUpperCase() : item.toLowerCase()
  );
  return answer;
}

// map 연습!
