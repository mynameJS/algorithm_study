// 문자열 바꿔서 찾기
// https://school.programmers.co.kr/learn/courses/30/lessons/181864

function solution(myString, pat) {
  const modifiedmyString = myString.replace(/A|B/g, (match) =>
    match === "A" ? "B" : "A"
  );
  return +modifiedmyString.includes(pat);
}

// 배열로 바꿔서 map 쓸까 아니면 정규표현식 쓸까 고민했는데 별 차이없을 것 같아서
// 정규표현식 연습 겸 써보았음
