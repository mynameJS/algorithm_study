/* 겹치는 선분의 길이
https://school.programmers.co.kr/learn/courses/30/lessons/120876
*/

function solution(lines) {
    
    let allNodes = [];
    
    for (let i = 0; i < lines.length; i++) {
        
        const lineA = lines[i][0];
        const lineB = lines[i][1];
        
        const lineLength = lineB - lineA;
        for (let l = 0; l < lineLength; l++) {
            allNodes.push(l+lineA);
        }
    }    
    
    const resultArray = [];
    const copiedAllNodes = [...allNodes]
    
    for (let i = 0; i < allNodes.length; i++) {
        const popNode = copiedAllNodes.pop();
        if (copiedAllNodes.includes(popNode) && !resultArray.includes(popNode)) {
            resultArray.push(popNode);
        }
    }
    
    return resultArray.length;
}


/* 처음에 내가 짠 코드

function solution(lines) {
    var answer = 0;
    var first = [];
    var second = [];
    var third = [];
    lines.sort((a,b) => a[0] - b[0]);
    for(var i = 0; i<lines.length; i++){
        lines[i][0] += 100;
        lines[i][1] += 100;
    }
    for(var j =lines[0][0]; j<=lines[0][1]; j++){
        first.push(j);
    }
    for(var k =lines[1][0]; k<=lines[1][1]; k++){
        second.push(k);
    }
    for(var l =lines[2][0]; l<=lines[2][1]; l++){
        third.push(l);
    }
    var total = first.concat(second)
    var total2 = first.concat(third);
    var total3 = second.concat(third);
    var total_total2 = [];
    var total_total3 = [];
    var total2_total3 = [];
    for(var m = 0; m<total.length; m++){
        for(var n = m+1; n<total.length; n++){
            if(total[m] === total[n]){
                total_total2.push(total[m]);
            }
        }
    }
    for(var o = 0; o<total2.length; o++){
        for(var p = o+1; p<total2.length; p++){
            if(total2[o] === total2[p]){
                total_total3.push(total2[o]);
            }
        }
    }
    for(var q = 0; q<total3.length; q++){
        for(var r = q+1; r<total3.length; r++){
            if(total3[q] === total3[r]){
                total2_total3.push(total3[q]);  
            }
        }
    }
    console.log('total_total2',total_total2);
    console.log('total_total3',total_total3);
    console.log('total2_total3',total2_total3);
    var total_all = total_total2.concat(total_total3).concat(total2_total3);
    console.log('total_all',total_all);
    var total_all_arr = [];
    for(var s = 0; s<total_all.length; s++){
        for(var t = s+1; t<total_all.length; t++){
            if(total_all[s] === total_all[t]){
                total_all_arr.push(total_all[s]);  
            }
        }
    }
    console.log('total_all_arr',total_all_arr);
    var total_all_arr_1 = [...new Set(total_all_arr)];
    console.log('total_all_arr_1',total_all_arr_1);
    var count = 0;
    for(var u = 0; u<total_all_arr.length; u++){
        if(total_all_arr[0] === total_all_arr[u]){
            count++
        }
    }
    console.log('count', count);
    if(lines[0][1] === lines[1][0] && total_all_arr.length === 0){
        answer = 0;
    }else if(total2_total3.length === 0){
        answer = (total_total2[total_total2.length-1] - total_total2[0]) + (total_total3[total_total3.length-1] - total_total3[0]);
    }else if(total_all.length > 0 && total_all_arr.length === 0){
        answer = total_all[total_all.length-1] - total_all[0];
    }else if(total_total2.length === 0){
        answer = (total_total3[total_total3.length-1] - total_total3[0]) + (total2_total3[total2_total3.length-1] - total2_total3[0]);
    }else if(total_total3.length === 0){
        answer = (total_total2[total_total2.length-1] - total_total2[0]) + (total2_total3[total2_total3.length-1] - total2_total3[0]);
    }else{
        answer = (total_total2[total_total2.length-1] - total_total2[0]) + 
            (total_total3[total_total3.length-1] - total_total3[0]) + 
            (total2_total3[total2_total3.length-1] - total2_total3[0]) - 
            (total_all_arr_1[total_all_arr_1.length-1] - total_all_arr_1[0])*(count-1);
    }
    return answer
}
