// 배열의 길이를 2의 거듭제곱으로 만들기
// https://school.programmers.co.kr/learn/courses/30/lessons/181857

function solution(arr) {
  const pow2 = [1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024];
  let result = [...arr];
  let resLen = 0;

  for (let i = 0; i < pow2.length; i++) {
    if (arr.length === pow2[i]) return arr;
    if (arr.length < pow2[i]) {
      resLen = pow2[i];
      break;
    }
  }

  for (let i = 0; i < resLen - arr.length; i++) {
    result = [...result, 0];
  }

  return result;
}
