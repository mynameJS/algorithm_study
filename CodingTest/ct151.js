// 글자 이어 붙여 문자열 만들기
// https://school.programmers.co.kr/learn/courses/30/lessons/181915

function solution(my_string, index_list) {
  let answer = "";
  index_list.forEach((i) => (answer += my_string[i]));
  return answer;
}

// 고차함수 배우니까 너무좋당
