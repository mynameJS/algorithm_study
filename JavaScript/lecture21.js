// for문
// for
// 초기구문, 업데이트 구문, 반복조건 을 한 구문에 합친 반복문.

// 0~4까지 더하는 동일한 while문과 for문.

// while 문

var sum = 0;
var i = 0; //초기 설정 코드
while( i < 5 /*조건식*/ ){
    sum = sum + i;
    i++; // 업데이트 코드
}

//for문

var sum = 0;
for( var i = 0 ; i < 5 ; i++ ){
    sum = sum + i;
}

// while , for 둘 다 break 을 만나면 바로 반복문 밖으로 빠져나오는 것은 동일하지만
// continue 를 만나면 while 은 조건식 -> 업데이트코드 순으로 검사한 후 반복할지 결정하지만
// for 문의 경우에는 조건식은 업데이트코드 -> 조건식 순으로 검사한 후 반복할지 결정함