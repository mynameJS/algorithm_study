/*
영어가 싫어요
https://school.programmers.co.kr/learn/courses/30/lessons/120894
*/


function solution(numbers) {
    let numStr = [ "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine" ];

    numStr.forEach((str, idx) => { // forEach 문을 사용해 numbers 안에 있는 문자열을 모두 바꿈
        numbers = numbers.replaceAll(str, idx);
    });
    return Number(numbers);
}