// Arithmetic : 산술(산수 계산을 하는)
// Operator : 연산자(계산하라는 기호)
// a+b a-b
// a%b : a를 b로 나눈 나머지 값
// a+b : a,b 는 피연산자 ; +는 2개의 피연산자를 가지는 다항연산자
// -a : a 는 피연산자; -는 1개의 피연산자를 가지는 단항연산자
// 증감연산자 : ++(변수의 값을 증가시키는 연산자), --(변수의 값을 감소시키는 연산자)


var a=1;
console.log(a); // 1
console.log(++a); // 2  // ++a; 는 a = a + 1; 과 같음
console.log(a); // 2 // ++a 로 a 의 값이 2가 되었으므로 그 다음에 출력되는 a 는 2로 출력됨

var b=1;
console.log(b); // 1
console.log(--b); // 0
console.log(b); // 0

// ++ 는 변수 앞에 쓰거나 뒤에 쓸 수 있는데 위치에 따라 출력값이 다른데 이는 실행순서의 차이라 보면됨

var c=1;
console.log(c); // 1
console.log(c++); //1 
console.log(c); // 2

// c++ 는 c(변수 1인 값)를 출력하고 그 다음부터 +1을 하게되는 실행순서를 보임


// ps
// Math 객체 간단 설명 (다음강의예고)
// JavaScript 에는 여러 수학적 상수 및 함수들이 Math 객체에 정의되어 있음
// 대표적으로 Math.pow 와 Math.sqrt 그리고 Math.random 이 있음


// Math.pow(a,b) : a의 b승을 구해 줌
console.log(Math.pow(2,3)); // 8

// Math.sqrt(a) : a 의 제곱근을 구해 줌
console.log(Math.sqrt(16)); // 4

// Math.random() : 0~1 사이의 임의의 난수를 발생시켜 줌
console.log(Math.random());