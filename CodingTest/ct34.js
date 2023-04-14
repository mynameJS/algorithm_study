/* 문자열 내 p와 y의 개수
https://school.programmers.co.kr/learn/courses/30/lessons/12916
*/

function solution(s){
    const stoLower = s.toLowerCase();
    let p_num = 0;
    let y_num = 0;
    for(let i = 0; i<stoLower.length; i++){
        if(stoLower[i] === 'p'){
            p_num++
        }else if(stoLower[i] === 'y'){
            y_num++
        }
    }
    return p_num === y_num ? true : false
}