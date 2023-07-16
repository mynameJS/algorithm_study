// 제로베이스 코딩테스트

/*

매개변수 area는 인수로 양의 정수를 받는다.
area는 직사각형의 넓이 값이다.
가로 세로 길이를 곱해서 area 값이 될 수 있는 조합 중에서
가로 세로의 길이 차이가 가장 적은 조합을 찾아 반환하라

*/

function solution(area) {
  let answer;
  const wh = [];

  for (let i = 1; i <= Math.sqrt(area); i++) {
    if (area % i === 0) {
      const width = i;
      const height = area / i;
      wh.push([width, height]);
    }
  }
  let minRes = 999999999;
  for (let i = 0; i < wh.length; i++) {
    if (Math.abs(wh[i][0] - wh[i][1]) < minRes) {
      minRes = Math.abs(wh[i][0] - wh[i][1]);
      answer = wh[i];
    }
  }

  return answer;
}
