// 숫자 짝꿍
// https://school.programmers.co.kr/learn/courses/30/lessons/131128

function solution(X, Y) {
  const answer = [];

  const Xarr = Array.from(X).sort((a, b) => a - b);
  const Yarr = Array.from(Y).sort((a, b) => a - b);

  let Xidx = 0; // Xarr 배열의 포인터
  let Yidx = 0; // Yarr 배열의 포인터

  while (Xidx < Xarr.length && Yidx < Yarr.length) {
    if (Yarr[Yidx] === Xarr[Xidx]) {
      answer.push(Yarr[Yidx]);
      Xidx++;
      Yidx++;
    } else if (Yarr[Yidx] > Xarr[Xidx]) {
      Xidx++;
    } else {
      Yidx++;
    }
  }

  return !answer.length
    ? "-1"
    : answer.at(-1) === "0"
    ? "0"
    : answer.reverse().join("");
}

// 시간초과, 아마도 shift를 사용하는데 정수의 크기가 매우 클 경우에 시간복잡도가 너무 커져서 테스트통과를 계속 못했음..
// 그래서 shift 대신 포인터 개념의 변수를 지정하여 대체하였고 테스트는 겨우 통과하였음...
// 정답률이 낮은 문제를 접할 때 마다 알고리즘은 금방 떠오르는데 시간복잡도를 해결하느라 시간을 많이 쓰는 것 같다.

// function solution(X, Y) {
//   const answer = [];

//   const Xarr = Array.from(X).sort((a, b) => a - b);
//   const Yarr = Array.from(Y).sort((a, b) => a - b);

//   while (Yarr.length > 0 && Xarr.length > 0) {
//      if (Yarr[0] === Xarr[0]) {
//         answer.push(Yarr[0]);
//         Yarr.shift();
//         Xarr.shift();
//       } else {
//         if (Yarr[0] > Xarr[0]) {
//           Xarr.shift();
//         } else {
//           Yarr.shift();
//         }
//       }
//     }
//     // answer 배열이 빈배열이면 '-1', 배열 요소가 '0'으로만 구성되었다면 '0', 그외에는 조합 시 가장 큰 값 리턴
//   return !answer.length ? '-1' : answer.at(-1) === '0' ? '0' : answer.reverse().join('');
// }
