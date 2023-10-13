// 배열의 길이를 2의 거듭제곱으로 만들기
// https://school.programmers.co.kr/learn/courses/30/lessons/181857

function solution(arr) {
  const powerOfTwo = [1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024];
  const arrLen = arr.length;
  if (powerOfTwo.includes(arrLen)) return arr;
  powerOfTwo.push(arrLen);
  powerOfTwo.sort((a, b) => a - b);
  const targetLen = powerOfTwo[powerOfTwo.indexOf(arrLen) + 1];
  const needZeros = targetLen - arrLen;
  const answer = [...arr, ...Array(needZeros).fill(0)];
  return answer;
}

// 2의 제곱수를 제한사항 내에 포함되게 배열을 만들고
// 해당 arr의 길이를 그 배열에 푸시한 뒤 인덱스를 찾아서 필요한 0의 갯수를 구해보았다.
