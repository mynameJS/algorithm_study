// 성격 유형 검사하기
// https://school.programmers.co.kr/learn/courses/30/lessons/118666

function solution(survey, choices) {
  var answer = "";
  const result = {
    R: 0,
    T: 0,
    C: 0,
    F: 0,
    J: 0,
    M: 0,
    A: 0,
    N: 0,
  };

  for (let i = 0; i < choices.length; i++) {
    if (choices[i] === 4) continue;
    else {
      if (choices[i] > 4) {
        result[survey[i][1]] += choices[i] - 4;
      } else {
        result[survey[i][0]] += 4 - choices[i];
      }
    }
  }

  if (result["R"] >= result["T"]) answer += "R";
  else if (result["R"] < result["T"]) answer += "T";

  if (result["C"] >= result["F"]) answer += "C";
  else if (result["C"] < result["F"]) answer += "F";

  if (result["J"] >= result["M"]) answer += "J";
  else if (result["J"] < result["M"]) answer += "M";

  if (result["A"] >= result["N"]) answer += "A";
  else if (result["A"] < result["N"]) answer += "N";

  return answer;
}
