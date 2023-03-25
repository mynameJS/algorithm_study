/* 연속된 수의 합
https://school.programmers.co.kr/learn/courses/30/lessons/120923
*/

function solution(num, total) { 
    var answer = [];
    var num_sum = 0;
    for(var i = 1; i<num; i++){
        num_sum = num_sum+i;
        console.log(num_sum); 
    }
    var result = (total - num_sum)/num;
    console.log(result);
    for(var j = 0; j < num; j++){
        answer.push(result);
        result++
    }
    return answer;
}

/* 등차수열 개념을 이용한 풀이
입출력 예  1번을 예시로 들면
a[0] = a, a[1] = a+1 이라 할 때, a[0]+a[1]+a[2] = a + (a + 1) + (a + 2) = 3a + 3 = 12
즉 3a + 3 = 12 , a = (12-3)/3 이고 a 는 배열의 첫 번째 값이므로 반복문을 돌려 답을 도출하였다.
