/* 평균 구하기
https://school.programmers.co.kr/learn/courses/30/lessons/12944
*/

function solution(arr) {
    var answer = 0;
    arr.forEach(num => answer += num/arr.length)
    return answer;
}

// 그냥..내가 쓴 코드 중에 제일 짧다 ㅠㅠ 기분좋네