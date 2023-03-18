// 문자열에 길이에  접근하는 방법

var str = "Hello";
str.length // 5
str["length"] // 5


// 문자열을 이어 붙이는 방법

 var str2 = " World";

 str.concat(str2); // 'Hello World'

 var str3=str.concat(str2); 

 str3 // "Hello World"

// 문자열을 이어주는 concat 은 여러번 쓸 수 있음

 str.concat(str2).concat("!"); // "Hello World!"

// concat 앞의 변수를 바로 문자열로 적어도 적용이 됨

 "Hello".concat(str2).concat("!"); // "Hello World!"

 // + 연산자를 사용하여도 문자열을 붙일 수 있음

 str+str2; // "Hello World"
 "Hello" + " World"; // "Hello World"

 // 문자열과 숫자도 붙일 수 있음

 "Pi is "+3.14 // "Pi is 3.14"
 3,14 + " is Pi"; // "3,14 us Pi"