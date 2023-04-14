/* 나머지가 1이 되는 수 찾기
https://school.programmers.co.kr/learn/courses/30/lessons/87389
*/
function solution(n) {
    const x = [];
    for(let i = 1; i <= n; i++){
        if(n%i === 1) x.push(i);
    }
    return Math.min(...x);
}