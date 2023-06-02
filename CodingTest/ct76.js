// 각 자릿수 홀수 개수 구하기
// 정수 n에서 각 자릿수에서 홀수의 개수를 출력하는 함수를 완성하시오

function solution(n) {
  const Arr = Array.from(String(n));
  const answer = Arr.filter((i) => i % 2 === 1);
  return answer.length;
}
