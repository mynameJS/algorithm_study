// 홀짝 구분하기
// https://school.programmers.co.kr/learn/courses/30/lessons/181944

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input = line.split(" ");
}).on("close", function () {
  n = Number(input[0]);
  return n % 2 ? console.log(`${n} is odd`) : console.log(`${n} is even`);
});
