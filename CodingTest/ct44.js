// 나누어 떨어지는 숫자 배열
// https://school.programmers.co.kr/learn/courses/30/lessons/12910

function solution(arr, divisor) {
    var answer = [];
    arr.sort((a,b) => a-b);
    if(divisor === 1){
        return arr;
    }
    for(let i = 0; i<arr.length; i++){
        if(arr[i] % divisor === 0){
            answer.push(arr[i]);
        }
    }
    return answer.length === 0 ? [-1] : answer;
}