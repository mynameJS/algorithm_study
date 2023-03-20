/* 프로그래머스 잘라서 배열로 저장하기
문제 설명
문자열 my_str과 n이 매개변수로 주어질 때, my_str을 길이 n씩 잘라서 저장한 배열을 return하도록 solution 함수를 완성해주세요.

제한사항
1 ≤ my_str의 길이 ≤ 100
1 ≤ n ≤ my_str의 길이
my_str은 알파벳 소문자, 대문자, 숫자로 이루어져 있습니다.
입출력 예 #1

"abc1Addfggg4556b" 를 길이 6씩 잘라 배열에 저장한 ["abc1Ad", "dfggg4", "556b"]를 return해야 합니다.
입출력 예 #2

"abcdef123" 를 길이 3씩 잘라 배열에 저장한 ["abc", "def", "123"]를 return해야 합니다.
유의사항
입출력 예 #1의 경우 "abc1Addfggg4556b"를 길이 6씩 자르면 "abc1Ad", "dfggg4" 두개와 마지막 "556b"가 남습니다. 
이런 경우 남은 문자열을 그대로 배열에 저장합니다.
*/

function solution(my_str, n) {
    var answer = [];
    var times = parseInt(my_str.length/n); // n 만큼 자른 후 남는 부분은 따로 추가를 해줘야하니 일단 n 만큼 잘라지는 횟수를 구했음
    var arr = my_str.split(''); // split을 사용하여 문자열을 배열로 만든 후
    for(var i = 0; i< times; i++){
        answer.push(arr.splice(0,n).join('')); // 아까 구한 times 만큼 arr를 자른 후 문자열로 변환하여 answer 에 넣어줬음, splice는 원본배열을 수정함
    }
    answer.push(arr.join('')); // 나머지 n 이하의 길이는 따로 추가
    if(my_str.length/n === times){ // my_str의 길이와 n 이 배수관계일 경우 answer에 빈 문자열이 된 my_str(" ")가 붙어버려서 조건문을 사용해 마지막 인덱스의 빈 문자열을 삭제하였음
        answer.pop();
    }
    return answer;
}
