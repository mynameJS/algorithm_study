/* 다음에 올  숫자
https://school.programmers.co.kr/learn/courses/30/lessons/120924
*/

function solution(common) {
    var answer = 0;
    if(common[1] - common[0] === common[common.length-1] - common[common.length-2]){ // 등차수열일 경우, 
        answer = common[common.length-1] + (common[1] - common[0]);
    }else{
        answer = common[common.length-1] * (common[1] / common[0]); // 등비수열일 경우
    }
    return answer;
}