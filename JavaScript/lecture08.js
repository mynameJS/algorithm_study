// JavaScript 에는 string, number, boolean, object 자료형 외에도 null, undefined 라는 자료형이 있는데
// 둘다 값이 없다라는 걸 뜻함
// var a = ?; 변수 a 에는 여러 자료형이 저장되어 있을 수 있지만 정말 아무 것도 없는 무의 상태일 수도 있음
// 그 상태를 표현하는 것이 null 과 undefined 라고 생각하면 됨
// 변수를 선언하고 초기화한다고 배웠는데 변수를 선언만하고 초기화를 하지 않으면 undefined 라고뜸
// null 은 개발자가 임의로 정의되지않은 값을 주는 것으로 undefined와 같이 정의되지않는 값인 뜻이지만
// null의 자료형은 object임
// 변수를 선언하고 초기화하지 않으면 typeof() 값이 undefined 지만, null 의 값으로 초기화를 하면
// typeof()의 값은 object로 분류됨



var uninitialized_var;

var obj={
    x:1,
    y:2
};