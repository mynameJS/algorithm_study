// 객체는 여러 속성을 가질 수 있는데
// 함수 또한 객체의 속성이 될 수 있으며
// 객체의 속성이되는 함수를 메소드(method)라고 부름


function f(){
    console.log(this);
    console.log("f is called");
}

function setName(name){
    this.name=name;
}

var a={name:"object", method:f, setName:setName};
var a2={name:"", setName:setName};

a.setName("object1");
a2.setName("object2");

console.log( a, a2);