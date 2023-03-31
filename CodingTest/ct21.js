/* 컨트롤 제트
https://school.programmers.co.kr/learn/courses/30/lessons/120853
*/

function solution(s) {
    var answer = 0;
    var sum = 0;
    var minus = 0;
    var arr = s.split(' '); // 문자열 공백 제거 후 배열로 변환
    console.log('arr',arr);
    for(var i = 0; i<arr.length; i++){ // 'Z' 가 아닌 모든 요소를 숫자형으로 변환 후 sum 에 더해줌
       if(arr[i] !== 'Z'){
           sum += +arr[i];
       }
    }
    console.log('sum',sum);
    for(var j = 0; j<arr.length; j++){ // 'Z' 앞에 있는 숫자 숫자형으로 변환 후 minus에 더해줌
        if(arr[j] === 'Z'){
            minus += +arr[j-1];
        }
    }
    console.log('minus',minus);
    return answer = sum-(minus); 
}