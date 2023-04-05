/* 자릿수 더기
https://school.programmers.co.kr/learn/courses/30/lessons/12931
*/

function solution(n){
    var answer = 0;
    var str_n = n+'';
    for(let i = 0; i<str_n.length; i++){
        answer += +str_n[i];
    }
    return answer;
}