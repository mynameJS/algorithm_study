// 달리기 경주
// https://school.programmers.co.kr/learn/courses/30/lessons/178871

function solution(players, callings) {
  const keyPlayers = {};
  const keyRanks = {};
  players.forEach((player, idx) => {
    const rank = idx + 1;
    keyPlayers[player] = rank;
    keyRanks[rank] = player;
  });

  callings.forEach((calling) => {
    const losePlayer = keyRanks[keyPlayers[calling] - 1];
    keyRanks[keyPlayers[calling]] = losePlayer;
    keyRanks[keyPlayers[losePlayer]] = calling;
    keyPlayers[calling] -= 1;
    keyPlayers[losePlayer] += 1;
  });

  return Object.values(keyRanks);
}

/* 시간초과 10~13번

function solution(players, callings) {
  for(let i = 0; i < callings.length; i++){
      const winner = callings[i];
      const winnerIndex = players.indexOf(winner);
      const loserIndex = winnerIndex - 1;
      
      [players[winnerIndex], players[loserIndex]] = [players[loserIndex], players[winnerIndex]];
  }
  
  return players;
}

*/

// 처음에 indexOf를 이용하여 호명된 선수와 그 앞에서 달리는 선수의 배열 순서를 바꿔주면서 코드를 짯으나
// players 최대길이 50000, callings의 길이 1000000 제한사항 때문에 테스트케이스에서 시간복잡도 때문에 통과를 못하였다.
// 그래서 players의 요소를 키로 갖는 객체와 players의 인덱스를 키로 갖는 객체를 각각 만들어서
// callings 배열에서 호명된 선수이름에 따라 두 객체의 값을 각각 바꿔주는 식으로 시간복잡도를 해결하였다.
// 속도가 거의 10배이상 차이나던데 indexOf로 전체 배열을 순회하는거랑 객체 내 프로퍼티로 접근하는거랑 이정도로 차이가 많이 나나? 라는 생각을 했다.
// 후반부 문제로 갈 수록 해결 단계에서 시간복잡도까지 고려하는 문제가 많이 등장하는데 매번 어려움을 겪고 있다...
// 사실 지금 JS문법을 배우는 초보단계이기에 나는 코딩테스트를 그저 코드를 직접 치고 문법에 익숙해지는 수단으로 활용하고 있었다.
// 하지만 난이도가 높은 문제일수록 시간복잡도를 이해하고 그에 따른 복잡한 처리과정을 구현할 수 있는 능력이 요구되는 것 같다.
// 아무 생각없이 쓰던 내장 메서드나 접근키워드들이 실제로 어떤식으로 동작하는지에 대한 흥미가 속에서 부글부글 끓는 느낌이지만..
// 현재 내가 프론트엔드 개발자로서 갖춰야할 기본소양 중 우선순위가 높은 것들을 위주로 공부하는게 맞는 것 같다.
// 개발자는 정말 공부를 하면 할 수록 다음 공부할 거리가 가지처럼 무한히 늘어나는 느낌이다.. 이래서 평생 공부해야 된다는건가?
