/* 구슬을 나누는 경우의 수
https://school.programmers.co.kr/learn/courses/30/lessons/120840
*/

function solution(balls, share) { 
    var answer = 1;
    var b_count = [];
    var s_count = share;
    for(var i = balls-share+1; i <= balls ; i++){
       b_count.push(i);
        console.log(b_count);
    }
    for(var j = 0; j<b_count.length; j++){
        answer *= b_count[j];
        console.log('a',answer);
    }
    
    while(share > 1){
        share--;
        s_count *= share;
        console.log('share', s_count); 
    }
    return Math.round(answer/s_count);// js 소숫점 오류를 방지하기 위해 Math.round를 붙여주었음
}

/* 5개 중 3개를 고르는 경우의 수는 (5*4*3)/(3*2*1) 이다
 5부터 -1을 빼준 값을 3개 나열한 후 각각의 수를 곱한다(5*4*3). 그리고 그 값을 3!(3*2*1)로 나누어주면 된다