function solution(my_string) {
    var answer = 0;
    var num = my_string.match(/[0-9]+/g); // match 정규식을 사용하여 문자열 내 숫자타입의 데이터를 추출한 배열을 만듦
    if(num === null){ // 문자열 내 숫자가 없으면 결과값은 null 이 나오므로 문제 제한사항에 의해 num의 값이 null 이면 0을 리턴하도록함
        answer = 0;
    } else{
        for(var i = 0; i<num.length; i++){ // 숫자만 추출된 배열의 각 인덱스 값의 합을 리턴하도록 하였음
        answer += Number(num[i]);
    }
    }
    return answer;
}