// 수식을 입력한 경우 일반 수학계산과 같이 +- 보다 */% 등이 연산 우선순위가 높다
// Relational operator(관계연산자) 와 Logical Operator(논리연산자)에도 연산 우선순위가 있음
// 1순위. Logical Operator : NOT (!)
// 2순위. Arithmetic Operator : *,/,%,+,-
// 3순위. Relational Operator : >,<,<=,>=,==,!=
// 4순위. Logical Operator : AND (&&)
// 5순위. Logical Operator : OR (||) 

// 예제
2 * 3 > 4 + 5 && 6 / 3 == 2 || !false 
2 * 3 > 4 + 5 && 6 / 3 == 2 || true 
6 > 9 && 2 == 2 || true
false && true || true
false || true
true



height >= 180 && gender == "male" || height >= 165 && gender == "female"

(height >= 180 && gender == "male") || (height >= 165 && gender == "female")

// 위의 식은 ()가 없어도 연산 우선순위에 따라 값이 똑같이 나오지만 코드의 가독성을 위해 붙여주었음




