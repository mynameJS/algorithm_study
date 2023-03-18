// 문자열에 있는 한 글자에 대한 접근 방법
// 첫번째 방법  문자열.charAt
var str="abcdefghi";
str.charAt(0); // a
// charAt() 음수값이나 length를 초과하는 숫자를 넣을 시 값이 반환되지 않음

// 두번째 방법 문자열[]
str[1]; // b
str[-1]; // undefined
// charAt() 과는 달리 length 범위 밖의 숫자를 적을 시 undefiend 값이 반환됨

str.substring(2,4); // cd 2번째 문자열부터 4번째 문자열 전까지의 문자나열
str.substring(2); // cdefghi 2번째 문자열부터 문자열 끝까지 나열
str.substr(2,4); // cdef 2번째 문자열에서부터 길이 4인 문자열 나열
str.substr(2); // cdefghi 2번째 문자열에서부터 문자열 끝까지 나열
str.substr(-4); // fghi 뒤에서 4번째 문자열에서부터 문자열 끝까지 나열
str.substr(-4,2); // fg 뒤에서 4번째 문자열에서부터 길이 2인 문자열 나열

// 문자열 안에서 주어진 문자열이 존재하는 위치를 찾아서 반환해주는 명령어
// 문자열.indexOf , 문자열.lastindexOf
var str2="abcdeabcde"

str.indexOf("bc"); // 1 문자열 앞에서부터 bc가 시작되는 위치 출력
str.lastIndexOf("bc"); // 6 문자열 뒤에서부터 bc가 시작되는 위치 출력
str.lastIndexOf("f"); // -1 해당 문자가 찾고자하는 문자열 안에 없을 시 -1을 반환
str.IndexOf("f"); // -1


