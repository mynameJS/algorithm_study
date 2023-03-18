var a=1, b=2, c=3, d=4;
var e="a", f="b", g="c", h="d";


// Relational operator , 관계연산자
// 2개의 피연산자를 비교하는 역할을 수행
// 대표적으로 대소비교 연산이 가능
// 관계연산자의 결과값은 boolean 타입으로 변환됨 (true false 등)
// 관계연산자의 종류 
// < , > , <= , >= , == , !=
// !=(A와B가 같지 않을 경우 참)
// number 타입뿐 아니라 string 타입도 비교 가능
// 문자열 비교는 사전순으로 비교를 하게 됨
// "a" < "b" 는 참, "c" < "a" 는 거짓


var A = 1;
var B = "1";

A==B // true
A===B // false

// == 는 두 변수의 값이 같을 때 true
// === 는 두 변수의 타입이 같을 때 true
// 즉 A==B 는 두 변수의 값이 1이기 때문에 참이고 A===B 는 값은 같지만 number 와 string 비교이기에 거짓이 나옴


// Logical Operator (논리연산자)
// And , Or, Not 등이 있음
// And : &   두 피연산자가 모두 참일 경우 참을 반환
// Or : ||  두 피연산자 중 하나라도 참일 경우 참을 반환
// Not : ! 단항연산자이므로 피연산자가 1개임 
// !ture -> false  , !false -> true

// 관계연산자와 논리연산자의 활용
var height = 180;
var age=20;
height >= 180 && age >= 20 && age < 30  // true
height >= 179 && age >= 20 && age < 30  // false
age < 8 || age >= 65 // false
age < 21 || age >= 65 // true
