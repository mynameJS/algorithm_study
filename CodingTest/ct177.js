// 특이한 이차원 배열 2
// https://school.programmers.co.kr/learn/courses/30/lessons/181831

function solution(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] !== arr[j][i]) return 0;
    }
  }
  return 1;
}

/*

모든 인덱스를 순회하는게 아니라 특정 인덱스만 비교할순 없을까? 로 계속 고민하다가
결국 못찾고 전체순회로 바꿨다...

앞뒤 인덱스가 같은 0,0 1,1 2,2 같은건 제외하고
앞 뒤 인덱스가 다른 인덱스에서 규칙성을 찾긴 했는데 구현에 감이 안잡혀서..


*/
