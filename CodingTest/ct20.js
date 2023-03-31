/* 유한소수 판별하기
https://school.programmers.co.kr/learn/courses/30/lessons/120878
*/

function solution(a, b) {
    var answer = 0;
    if(a % b === 0){ // a/b가 정수값이면 그 자체로 유한소수
        return answer = 1;
    }
    
    var min_num = Math.min(a,b); // a,b중 작은 값 판별
    for(var i = min_num; i>0; i--){ // a,b 둘다 나눠지면서 가장 큰 값을 가지는(최대공약수) i를 찾아서 분모 b에 나눠주었음
        if(a % i === 0 && b % i === 0){
            var b_GDF = b/i;
            break;
        }
    }
    console.log(b_GDF);
    var divisor = 2;
    var result = [];
    while(b_GDF >= 2){ // b_GDF를 소인수분해 하여 result에 넣어주었음
        if(b_GDF % divisor === 0){
            result.push(divisor)
            b_GDF = b_GDF / divisor;
        } else divisor ++;
    }
    
    for(var j = 0; j<result.length; j++){ // result의 요소가 2,5만 있다면 유한소수, 다른 값이 있다면 무한소수 판별 
        if(result[j] % 2 === 1 && result[j] !== 5){
            answer = 2;
            break;
            
        }else{
            answer = 1;
            
        }
    }
    return answer;
}