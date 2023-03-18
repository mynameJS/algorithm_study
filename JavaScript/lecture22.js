// 객체의 각 속성을 출력하는 코드
var obj={
    "속성1":1,
    "속성2":2,
    "속성3":3
}


var obj={
    name:"Object",
    weight:30,
    isObject:true,
    arr:[1,2,3],
    obj:{propery:1}
}

Object.keys(obj) // ["name", "weight", "isObject", "arr", "obj"]

// for in문
// for in
// 객체의 각 엘리먼트에 접근할 수 있는 반복문.

// 객체의 속성들을 출력하는 동일한 코드
// for 구문 사용

var property_list = Object.keys(obj);

for( var i=0 ; i<property_list.length ; i++ ){
    var propertyName = property_list[i];
    console.log( "\t", propertyName, ": ", obj[propertyName] );
}

// for in 구문 사용

for( var propertyName in obj ){
    console.log( "\t", propertyName, ": ", obj[propertyName] );
}

// for in 이해 다 안됨 