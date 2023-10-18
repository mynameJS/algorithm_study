// 배열 만들기2
// https://school.programmers.co.kr/learn/courses/30/lessons/181921

function solution(l, r) {
  const onlyFiveZero = (num) => {
    const numStr = num + "";
    const filter = [...numStr].filter((v) => v === "0" || v === "5");
    return numStr.length === filter.length;
  };

  const result = Array(r - l + 1)
    .fill()
    .map((_, i) => i + l)
    .filter(onlyFiveZero);

  return result.length === 0 ? [-1] : result;
}

// filter 고차함수의 콜백함수를 만들어서 판별해보았다!
