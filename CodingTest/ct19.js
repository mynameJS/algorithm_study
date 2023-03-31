/* 로그인 성공?
https://school.programmers.co.kr/learn/courses/30/lessons/120883
*/


function solution(id_pw, db) {
    var answer = '';
    for(var i = 0; i<db.length; i++){
        if(id_pw+'' === db[i]+''){
            answer = "login"
        }else if(id_pw[0]+'' === db[i][0]+'' && id_pw[1]+'' !== db[i][1]){
            answer = "wrong pw"
            break;
        }else{
            answer = "fail"
        }
    }
    return answer;
}