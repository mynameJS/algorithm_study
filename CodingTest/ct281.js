// 제로베이스 코딩테스트

// 주어진 문자열에서 . , ! ? ' ' 을 구분자로 문자열을 나눈 후 나눠진 문자열을 거꾸로 변경해서 반환하기

function solution(s) {
  const onlyAlp = [...s].map((v) =>
    v === "." || v === "," || v === "!" || v === "?" ? " " : v
  );
  return onlyAlp
    .join("")
    .trim()
    .split(" ")
    .filter((v) => v)
    .map((v) => [...v].reverse().join(""));
}
