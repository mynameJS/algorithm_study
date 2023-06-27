// 체육복
// https://school.programmers.co.kr/learn/courses/30/lessons/42862

function solution(n, lost, reserve) {
  var answer = n - lost.length;
  // 처음 가능한 학생수 = n - lost.length
  // lost 배열 앞뒤의 값을 reserve에 포함되어있는지를 확인 -> 해당값을 reserve에서 뺌 + answer++
  // 왜 정렬을 해줘야 하지? - [4,2], [3,5]와 같은 케이스 때문

  let realLost = lost.filter((l) => !reserve.includes(l));
  let realReserve = reserve.filter((r) => !lost.includes(r));
  answer += lost.length - realLost.length;

  realLost.sort((a, b) => a - b);

  realLost.forEach((l) => {
    if (realReserve.length === 0) {
      return;
    }

    if (realReserve.includes(l - 1)) {
      realReserve = realReserve.filter((r) => r !== l - 1);
      answer++;
    } else if (realReserve.includes(l + 1)) {
      realReserve = realReserve.filter((r) => r !== l + 1);
      answer++;
    }
  });
  return answer;
}

// 이번 코딩테스트는 테스트케이스를 모두 통과하지 못했다.
// 계속 예외처리를 구현하다가 코드가 명령형 처럼 줄줄 새길래 이건 아니다 싶어서 다른 분들이 푼  정답지를 먼저 보았다.
// 위 코드가 내가 머릿속으로 생각했던 의사코드와 매우 흡사해서 인용하게 되었다.
// 이번 기회에 고차함수를 좀 더 잘 써야겠다는 생각을 많이 했다...
