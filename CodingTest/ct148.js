// 문자열 붙여서 출력하기
// https://school.programmers.co.kr/learn/courses/30/lessons/181946

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input = line.split(" ");
}).on("close", function () {
  console.log(input.join(""));
});

/*
문제는 굉장히 간단한데 JS 문제중에 이렇게 입력값 받아와서 사용하는건 처음이라 기본 코드폼 해석하는데 시간이 좀 걸렸음..
*/
