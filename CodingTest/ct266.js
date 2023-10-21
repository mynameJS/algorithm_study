// 한 번만 등장한 문자
// https://school.programmers.co.kr/learn/courses/30/lessons/120896

function solution(s) {
  const sArr = [...s];
  sArr.sort();
  const alphabets = {};
  sArr.forEach((v) =>
    alphabets[v] ? (alphabets[v] += 1) : (alphabets[v] = 1)
  );
  const result = Object.entries(alphabets).reduce((a, c) => {
    const [alp, num] = c;
    return num === 1 ? a + alp : a;
  }, "");
  return result;
}

// Object.entries를 이용하여 reduce로 마무리하였다!
