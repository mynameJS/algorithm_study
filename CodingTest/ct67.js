// 숫자 문자열과 영단어
// https://school.programmers.co.kr/learn/courses/30/lessons/81301

function solution(s) {
  const strToNumber = {
    zero: "0",
    one: "1",
    two: "2",
    three: "3",
    four: "4",
    five: "5",
    six: "6",
    seven: "7",
    eight: "8",
    nine: "9",
  };
  const replacedStr = s.replace(
    /one|two|three|four|five|six|seven|eight|nine|zero/g,
    (match) => {
      return strToNumber[match];
    }
  );
  console.log(replacedStr);
  return +replacedStr;
}

// replace 메소드를 사용하여 strToNumber 객체의 프로퍼티와  문자열 s 가 일치하는(match)부분을 strToNumber[match]로 대체하였다.
