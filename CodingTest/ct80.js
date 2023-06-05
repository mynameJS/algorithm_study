// 2016년
// https://school.programmers.co.kr/learn/courses/30/lessons/12901

function solution(a, b) {
  const week = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];
  const month = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let date = b;
  for (let i = 0; i < a - 1; i++) {
    date += month[i];
  }
  const result = !!week[(date % 7) - 1] ? week[(date % 7) - 1] : "THU";
  return result;
}

// 제출은 이렇게 해서 통과를 했는데.. week 배열의 순서를 바꾸면 result에 쓸데없는 삼항연산자를 안써도 될 것 같다.
// 7로 나눈 나머지가 0인경우가 목요일이니까
// 인덱스 0번쨰를 'THU'로 시작하면 될 것 같다.

function solution(a, b) {
  const week = ["THU", "FRI", "SAT", "SUN", "MON", "TUE", "WED"];
  const month = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let date = b;
  for (let i = 0; i < a - 1; i++) {
    date += month[i];
  }
  const result = week[date % 7];
  return result;
}
