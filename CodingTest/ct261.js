// 정사각형으로 만들기
// https://school.programmers.co.kr/learn/courses/30/lessons/181830

function solution(arr) {
  const needZero = Math.abs(arr.length - arr[0].length);
  if (arr.length > arr[0].length) {
    return arr.map((v) => (v = [...v, ...Array(needZero).fill(0)]));
  } else if (arr.length < arr[0].length) {
    const zeroArr = Array(arr[0].length).fill(0);
    return [...arr, ...Array(needZero).fill(zeroArr)];
  }
  return arr;
}

// Array 생성자함수와 fill 메서드를 적극사용해보았다.
