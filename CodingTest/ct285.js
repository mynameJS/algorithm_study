// 제로베이스 코딩테스트

// 붉은색 종이

function solution(n) {
  const numberList = Array(n)
    .fill()
    .map((_, i) => i + 1);
  return numberList.reduce((a, c) => {
    const count = [...c.toString(2)].filter((v) => v === "1").length;
    return a + count;
  }, 0);
}
