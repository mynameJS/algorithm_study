// 영어가 싫어요
// https://school.programmers.co.kr/learn/courses/30/lessons/120894

function solution(numbers) {
  const convert = [
    ["one", "1"],
    ["two", "2"],
    ["three", "3"],
    ["four", "4"],
    ["five", "5"],
    ["six", "6"],
    ["seven", "7"],
    ["eight", "8"],
    ["nine", "9"],
    ["zero", "0"],
  ];

  convert.forEach((v) => {
    const [str, num] = v;
    numbers = numbers.replaceAll(str, num);
  });
  return +numbers;
}

// 배열을 이용해서 풀어보았다.
// 다른 분은 index를 이용해서 zero, one, two, three 이런식으로 풀었던데 그 방법도 좋은 것 같다.
