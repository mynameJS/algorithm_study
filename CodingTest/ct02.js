/* 프로그래머스 이진수 더하기
문제 설명
이진수를 의미하는 두 개의 문자열 bin1과 bin2가 매개변수로 주어질 때, 두 이진수의 합을 return하도록 solution 함수를 완성해주세요.

제한사항
return 값은 이진수를 의미하는 문자열입니다.
1 ≤ bin1, bin2의 길이 ≤ 10
bin1과 bin2는 0과 1로만 이루어져 있습니다.
bin1과 bin2는 "0"을 제외하고 0으로 시작하지 않습니다.
*/

function solution(bin1, bin2) {
    return (parseInt(bin1, 2) + parseInt(bin2, 2)).toString(2); // n진수 변환 문법을 사용하여 문제를 해결하였음
  }

  
  
/*
  1. parseInt()
정수를 반환 ← 주로 사용하던 기능
문자열을 파싱 하여 특정 진수의 정수를 반환 (= 특정 진수를 10진수로)

const str = "10";
console.log(parseInt(str)); //10 (str을 정수로)
console.log(parseInt(str, 2)); //2 (2진수인 str을 10진수로)
 

cf) 문자열이 진법 체계에 맞지 않는 경우

parseInt("23", 2)에서, 문자열 "23"은 이진수가 아니므로 NaN을 반환
 

 

2. toString()
문자열을 반환 ← 주로 사용하던 기능
숫자의 경우 선택적으로 기수(2~36)를 매개변수로 취하며, 이를 통해 10진수를 특정 진수로 변환한 값 반환

const num = 10;
console.log(num.toString()); //"10" (num을 문자열로)
console.log(num.toString(2)); //"1010" (num을 2진수로)
*/