// arr 배열 안 2진수들 or 연산 후 결과값 10진수로 나타내기

function solution(arr) {
  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    result = result | parseInt(arr[i], 2);
  }

  return result;
}

// 알고리즘 풀면서 비트연산자를 이렇게 직접적으로 써본 적이 없었는데 이번에 처음봄..
