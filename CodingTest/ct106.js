// 제로베이스 코딩테스트
// 문자열 s 가  주어진다. 문자열 s 내에는 . , ? ! ' ' 등 특수문자와 공백, 그리고 문자로 이루어져 있다.
// 특수문자와 공백을 구분자로 하여 문자를 추출한 후
// 그 문자를 거꾸로 뒤집어서 배열 형태로 리턴하라
function solution(s) {
  const removeStr = s.replace(/[.,?!]/g, " ").trim();
  const removeArr = removeStr.split(/\s+/).filter((item) => item !== "");
  const reverseRemoveArr = removeArr.map((item) =>
    Array.from(item).reverse().join("")
  );
  return reverseRemoveArr;
}
