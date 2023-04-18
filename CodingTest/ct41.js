// 두 정수 사이의 합
// https://school.programmers.co.kr/learn/courses/30/lessons/12912

function solution(a, b) {
    var answer = 0;
    let arr = [a,b].sort((a,b) => a-b);
    for(let i = arr[0]; i<= arr[1]; i++){
        answer += i;
    }
    return a===b ? a : answer;
}