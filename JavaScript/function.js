function 함수이름( 매개변수1, 매개변수2 ){
    /*
    // 실행할 코드
    */
    return 반환값;
}
// 매개변수 : parameter

function return_test(){
    return;
    console.log("실행되지 않는 코드");
}

// 함수는 return 값을 만나면 즉시 종료되므로 아래 console.log 가 실행되지 않음

function print(message){
    console.log("print function in");
    console.log(message);
    console.log("print function out");
}

// return 값이 없기 때문에 undefined 값이 나옴

function sum( arg1, arg2 ){
    var result = arg1 + arg2;
    return result;
}

// sum(1,2);  -> 3 