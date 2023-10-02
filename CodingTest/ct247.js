// 짝지어 제거하기
// https://school.programmers.co.kr/learn/courses/30/lessons/12973

// function solution(s){
//     const stk = [];
//     for(let i = s.length - 1; i >= 0; i-= 1){
//         if(stk[0] === s[i]){
//             stk.shift();
//         }else{
//             stk.unshift(s[i]);
//             }
//     }

//     return stk[0] ? 0 : 1;
// }

function solution(s) {
  const stack = [];
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === stack.at(-1)) stack.pop();
    else stack.push(s[i]);
  }
  return stack.length === 0 ? 1 : 0;
}

// unshift, shift 보다 pop이 더 효율적임
// 배열의 길이가 길어질 수록 두 메서드 사용으로 인해 차이나는 시간복잡도는 거의 2~30배 수준이었다.....
