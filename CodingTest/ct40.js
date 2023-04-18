// 하샤드 수
// https://school.programmers.co.kr/learn/courses/30/lessons/12947

function solution(x) {
    var sum = 0;
    const x_arr = x.toString().split('')
    for(let i = 0; i<x_arr.length; i++){
        sum += +x_arr[i];
    }
    return x%sum === 0 ? true : false;
}