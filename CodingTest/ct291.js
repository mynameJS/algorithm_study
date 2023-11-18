// 제로베이스 코딩테스트
// 앱 디자인

function solution(area) {
  const wh = [];
  let w = 1;
  let h = area;
  let minLen = Infinity;
  while (h > w) {
    if (area % w === 0) {
      h = area / w;
      const len = h - w;
      if (minLen > len) {
        minLen = len;
        wh.pop();
        wh.push([w, h]);
      }
    }
    w++;
  }
  return wh.length ? wh.flat() : [w, h];
}
