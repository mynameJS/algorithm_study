// 제로베이스 코딩테스트
// 정수 n 이 있을 때 1부터 n 까지의 정수를 2진수로 바꿨을 때 각각의 이진수에서 1이 등장하는 횟수를 출력하라

function solution(n) {
  const num = [];
  let count = 0;
  for (let i = 1; i < n + 1; i++) {
    num.push(i.toString(2));
  }
  const oneCountArray = num.map((i) => {
    const count = (i.match(/1/g) || []).length;
    return count;
  });
  const result = oneCountArray.reduce((a, c) => a + c);

  return result;
}
