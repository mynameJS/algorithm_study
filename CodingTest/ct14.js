/* OX퀴즈
https://school.programmers.co.kr/learn/courses/30/lessons/120907
*/

function solution(quiz) { // ["19 - 6 = 13", "5 + 66 = 71", "5 - 15 = 63", "3 - 1 = 2"]
    var answer = [];
  
    for (let i = 0; i < quiz.length; i++) { 
      let sic = quiz[i].split(" "); 
      console.log(sic); // 	[ '19', '-', '6', '=', '13' ] 아래는 이 배열로 적용시킬 것임
                        //  [ '5', '+', '66', '=', '71' ]
                        //  [ '5', '-', '15', '=', '63' ]
                        //  [ '3', '-', '1', '=', '2' ]
      let num1 = parseInt(sic[0]); 
        console.log(num1); // 19
      let num2 = parseInt(sic[2]);  
        console.log(num2); // 6
      let num3 = parseInt(sic[sic.length - 1]); // 배열 맨 마지막 요소 출력
         console.log(num3); // 13
  
      if (sic[1] === "-" && num2 < 0) {
        num2 = Math.abs(num2); // - 연산자 뒤에 음수값이 나오면 에러가 떠서 조건을 걸어주었음
      } else if (sic[1] === "+" && num2 < 0) {
        num2 = parseInt(num2);
      } else {
        num2 = parseInt(sic[1] + sic[2]);
      }
  
      num1 + num2 === num3 ? answer.push("O") : answer.push("X");
    }
  
    return answer;
  }
