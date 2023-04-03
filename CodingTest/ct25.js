/* 외계어 사전
https://school.programmers.co.kr/learn/courses/30/lessons/120869
*/

function solution(spell, dic) {
    const isThere = [];
    
    dic.forEach((word) => {
        let count = 0;
        
        spell.forEach((item) => {
            if(word.includes(item)){ // dic 배열 원소 하나에 대하여 spell 의 원소를 비교하여 일치한다면 count 1 줌
                count += 1;
            }
        })
        
        if(count === spell.length){ // count 숫자가 spell의 길이와 같다면 spell의 모든 원소가 dic 원소 하나에 모두 들어있다는 뜻
            isThere.push(word); 
        }
    })
    
    return isThere.length === 0 ? 2 : 1; 
}
