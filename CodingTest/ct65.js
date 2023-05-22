// [1차] 비밀지도
// https://school.programmers.co.kr/learn/courses/30/lessons/17681

function solution(n, arr1, arr2) {
  let answer = [];
  let arr1_2 = arr1.map((item) => {
    let binary = item.toString(2);
    while (binary.length < n) {
      binary = "0" + binary;
    }
    return binary;
  });
  let arr2_2 = arr2.map((item) => {
    let binary = item.toString(2);
    while (binary.length < n) {
      binary = "0" + binary;
    }
    return binary;
  });
  console.log(arr1_2, arr2_2);
  for (let i = 0; i < arr1_2.length; i++) {
    let result = "";
    for (let j = 0; j < n; j++) {
      if (Number(arr1_2[i][j]) || Number(arr2_2[i][j])) {
        result += "#";
      } else {
        result += " ";
      }
    }
    answer.push(result);
  }
  return answer;
}
