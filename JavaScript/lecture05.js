var height=prompt("키를 입력해 주세요");
console.log( height, typeof(height));
// 180 -> 180 string
// height 문자열을 변수로 지정했기 때문에 prompt 창에 숫자를 적어도 문자열로 인식
var height_int = parseInt(height);
console.log( height_int, typeof(height_int)); // parseInt 입력된 문자열에서 정수부분을 추출하여 number로 인식
// 180 -> 180 'number'
// 180 입니다 -> 180 'number'
// 제 키는 190이면 좋겠습니다 -> NaN 'number'
var height_float = parseFloat(height); // parseFloat 정수의 실수부분까지 추출하여 number로 인식
console.log( height_float, typeof( height_float));
// 180.3 -> 180.3 'number'

// parseInt , parseFlot : 문자열에서 -> 숫자를 추출하여 number로 변환인식,
// parseInt , parseFlot는 문자열의 시작부터 인식할 수 있는 숫자를 인식하기 때문에 '
// 제 키는 190이면 좋겠습니다.' 는 앞의 제 키는의 문자열 때문에 숫자를 인식하지 못함
// NaN : Not a number
