// 제로베이스 코딩테스트
// 모래 뺏기 게임 무조건 이기는 지 판별하기

function solution(num) {
  return !!(num % 4 !== 1);
}

// 흥민이가 무조건 이기려면 마지막에 1kg 을 남겨서 누나한테 넘겨야됨
// 흥민이가 마지막 자신의 차례에 모래를 가져간 후 남겨야 할 모래 무게는 1kg
// 누나,흥민이는 한번에 1~3kg을 가져갈 수 있으므로
// 흥민이가 1kg을 남기기 위해서는 이전 차례에서 5kg을 남기고 누나에게 넘겨줘야됨
// 누나에게 5kg을 남기고 넘기면 누나가 1~3kg중 몇 kg를 가져간다 해도 흥민이는 무조건 1kg을 남겨서 넘길 수 있음
// 흥민이가 남겨야 할 필승 모래 무게를 거꾸로 타고 올라가 보면
// 1kg -> 5kg -> 9kg -> 13kg -> 17kg -> 21kg -> 25kg -> 29kg -> 33kg ... 이 됨
// 예를 들어 시작 모래 무게가 20kg라고 가정해보면
// 20kg 에 선공을 잡은 흥민이는 3kg을 가져가서 필승 모래 무게인 17kg을 넘기면 무조건 이기게 됨
// 즉, 무조건 선공인 흥민이 입장에서
// 시작 모래 무게가 필승 모래 무게가 된다면 패배하게 되고(누나도 필승법을 알고 있다고 하였으므로)
// 시작 모래 무게가 필승 모래 무게가 아니라면 흥민이는 무조건 승리할 수 있음
