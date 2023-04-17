/* 정수 제곱근 판별

https://school.programmers.co.kr/learn/courses/30/lessons/12934

*/

function solution(n) {
    let num = Math.sqrt(n);
    return num % 1 === 0 ? Math.pow(num+1, 2) : -1;
}