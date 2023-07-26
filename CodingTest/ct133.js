// 접두사인지 확인하기
// https://school.programmers.co.kr/learn/courses/30/lessons/181906

function solution(my_string, is_prefix) {
  const prefixArr = [];
  for (let i = 1; i < my_string.length + 1; i++) {
    prefixArr.push(my_string.slice(0, i));
  }

  return prefixArr.includes(is_prefix) ? 1 : 0;
}

/*

function solution(my_string, is_prefix) {
    return is_prefix[0] === 'b' ? (my_string.includes(is_prefix) ? 1 : 0) : 0;
    
}

처음에 이렇게 풀었다가 반례를 못찾아서 테스트케이스를 통과하지 못했음..

그래서 아예 접두사를 모두 구해서 배열 안에 담은 다음에 is_prefix가 포함되는지로 문제를 풀긴하였음

function solution(my_string, is_prefix) {
    return my_string.slice(0, is_prefix.length) === is_prefix ? 1 : 0
}

이 코드는 다른사람이 푼건데 is_prefix 길이만큼 my_string 문자열 자른 다음에 비교하는 식으로 풀었더라고.. 더 기발한 방법인것같다!

*/
