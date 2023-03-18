// 객체(object)란? 속성(property)의 집합
// 사람(object) : 이름 , 나이, 키(property)
var man = { name:"이재성", age:30, height:178 };
// name, age, height : 속성의 이름
// 이재성, 30, 178 : 속성의 값
// 객체 속성의 값은 모든 자료형이 될 수 있음 (string, number, boolean 등), 심지어 object 또한 객체의 속성값이 될 수 있음
// 객체의 속성값에 접근하는 2가지 방법
// 첫번째, 객체이름.속성이름 혹은 객체이름["속성이름"] 대괄호안의 속성이름은 string이 들어가야됨
// ex) man.name or man["name"] : 이재성
// 객체의 속성값을 변경하는 방법
// 객체이름.속성이름=변경이름 or 객체이름["속성이름"]=변경이름
// ex) man.name=재성이 or man["name"]="재성이"