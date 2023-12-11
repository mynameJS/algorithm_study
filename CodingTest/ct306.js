// 제로베이스 코딩테스트
// 완전 이진 트리, 이진 힙

function solution(arr) {
  let answer = "YES";

  for (let i = 1; i < arr.length; i++) {
    if (arr[i * 2 + 1]) {
      const parentNode = arr[i];
      const leftChildNode = arr[i * 2];
      const rightChildNode = arr[i * 2 + 1];
      if (parentNode > leftChildNode || parentNode > rightChildNode) {
        answer = "NO";
        break;
      }
    } else break;
  }
  return answer;
}
