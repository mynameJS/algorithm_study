/* 평행
https://school.programmers.co.kr/learn/courses/30/lessons/120875
*/


function solution(dots) {
    // dots = [[x1, y1], [x2, y2], [x3, y3], [x4, y4]]
    var answer = 0;
    var a = dots[0]; // [x1, y1]
    var b = dots[1]; // [x2, y2]
    var c = dots[2]; // [x3, y3]
    var d = dots[3]; // [x4, y4]
    var ab = (b[1] - a[1]) / (b[0] - a[0])
    var cd = (d[1] - c[1]) / (d[0] - c[0])
    
    var ac = (c[1] - a[1]) / (c[0] - a[0])
    var bd = (d[1] - b[1]) / (d[0] - b[0])
    
    var ad = (d[1] - a[1]) / (d[0] - a[0])
    var bc = (c[1] - b[1]) / (c[0] - b[0])
    
    if(ab === cd){
        answer++
    }else if(ac === bd){
        answer++
    }else if(ad === bc){
        answer++
    }

    return answer > 0 ? 1 : 0;
}

/* 두 직선이 평행하려면 직선의 기울기가 같아야한다 
4개의 점을 2개씩 이 2개의 선분을 만든다고 할  때 경우의 수는 3가지뿐임
각 경우의 수에 따 기울기를 구한 후  값이 같으면 1을 추가해주었고
리턴값으로 1보다 크면 1 아니면 0 조건식을 넣어 판별하였음