function solution (string) {
    let answer = 0;
    let num = string.match(/\d+/g);
    for(let i = 0; i<num.length; i++){
        answer += +num[i];
    }
    return answer;
}

