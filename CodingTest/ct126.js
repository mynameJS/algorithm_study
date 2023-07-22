// 공원 산책
// https://school.programmers.co.kr/learn/courses/30/lessons/172928

function solution(park, routes) {
  // 이전 위치
  let prevPos = [0, 0];

  // 2차원 배열 지도
  const map = [];
  park.forEach((row, idx) => {
    const sPos = row.indexOf("S");
    if (sPos >= 0) {
      prevPos = [idx, sPos];
    }
    map.push([...row]);
  });

  // 사용자 방향 딕셔너리
  const dict = {
    E: [0, 1],
    W: [0, -1],
    S: [1, 0],
    N: [-1, 0],
  };

  routes.forEach((route, routeIdx) => {
    // 방향과 거리 입력받기
    const [pos, range] = route.split(" ");
    let curPos = [...prevPos];
    let applyFlag = true;

    // 거리만큼 반복
    for (let i = 0; i < range; i++) {
      curPos[0] += dict[pos][0];
      curPos[1] += dict[pos][1];

      // 장애물 판별 || 공원을 벗어났는지 판별
      if (
        curPos[0] > map.length - 1 ||
        curPos[0] < 0 ||
        curPos[1] > map[0].length - 1 ||
        curPos[1] < 0
      ) {
        applyFlag = false;
        break;
      }

      if (map[curPos[0]][curPos[1]] === "X") {
        applyFlag = false;
        break;
      }
    }

    if (applyFlag) prevPos = curPos;
  });

  // 문제가 없다면 이 변수에 반영되도록
  return prevPos;
}

/*

function solution(park, routes) {
    const parkWh = [park[0].length-1, park.length-1];
    const curSpot = [];

    // 시작위치 찾기
    for(let i = 0; i < park.length; i++){
        if(park[i].includes('S')){
            curSpot.push(i, park[i].indexOf('S'));
        }
    }

    // routes 돌면서 현재위치 찾기
    for(let i = 0; i < routes.length; i++){
        if(routes[i][0] === 'N'){
            if(curSpot[1] - Number(routes[i].at(-1)) >= 0){
                for(let j = curSpot[0]; j < Number(routes[i].at(-1)); j++){
                    if(park[j][curSpot[1]] === 'X') break;
                    else{
                        curSpot[1] = curSpot[1] - Number(routes[i].at(-1));
                    }
                }
            }
        }else if(routes[i][0] === 'S'){
            if(curSpot[1] - Number(routes[i].at(-1)) <= parkWh[1]){
                for(let j = curSpot[0]; j < Number(routes[i].at(-1)); j++){
                    if(park[j][curSpot[1]] === 'X') break;
                    else{
                        curSpot[1] = curSpot[1] + Number(routes[i].at(-1));
                    }
                }
            }
        }else if(routes[i][0] === 'W'){
            if(curSpot[0] - Number(routes[i].at(-1)) >= 0){
                for(let j = curSpot[0]; j < Number(routes[i].at(-1)); j--){
                    if(park[curSpot[0]][j] === 'X') break;
                    else{
                        curSpot[0] = curSpot[0] - Number(routes[i].at(-1));
                    }
                }
            }
        }else if(routes[i][0] === 'E'){
            if(curSpot[0] - Number(routes[i].at(-1)) <= parkWh[0]){
                for(let j = curSpot[0]; j < Number(routes[i].at(-1)); j++){
                    if(park[curSpot[0]][j] === 'X') break;
                    else{
                        curSpot[0] = curSpot[0] + Number(routes[i].at(-1));
                    }
                }
            }
        }
    }
    
    return curSpot;
}


*/

// 아래 코드가 내가 구현한 코드...물론 테스트케이스를 통과하지 못했다.
// 위의 주석처리 안한 코드는 다른사람풀이 중 내가 구현하고자 했던 알고리즘과 가장 유사한 정답이다.
// 정답 코드는 이동방향을 객체화 해서 구현했지만
// 나는 그냥 명령형코드처럼 짜다가 중간에서 예외상황을 제대로 처리하지 못해 통과하지 못했다.
// 코드를 몇시간 치다가 포기하고 다른사람 코드를 봤을 때 나는 빡대가리인가..하는 절망감에 휩싸이곤 한다.
// 하지만 이를 영양분 삼아 경험을 쌓고 성장하는 발판이 되길 바란다.......
