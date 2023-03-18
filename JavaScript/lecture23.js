// 변수의 scope
// 선언된 변수가 어느 위치에서 유효한가를 말함

function a(){
    var v_a="a";

    function b(){
        var v_b="b";
        console.log("b :", typeof(v), typeof(v_a), typeof(v_b)); // string string string
    }

    b();
    console.log("a :", typeof(v), typeof(v_a), typeof(v_b)); // string string undefined
}


var v="v";

a();

console.log("o :", typeof(v), typeof(v_a), typeof(v_b)); // string undefined undefined

// 변수의 scope는 function의 scope를 따른다
// 이는 객체(변수)는 선언된 함수 안에서만 접근이 가능하다는 것을 의미