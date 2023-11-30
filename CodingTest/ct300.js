// 제로베이스 코딩테스트
// 국가간 지역 정보를 표시한 지도가 있습니다. 여기서 하나의 국가에 해당하는 지역은 다수의 영토간 연결을 통해 이어지는 모든 지역을 하나의 국가로 칭합니다.

function search(arr, Countries, Country, count) {
  for (var i = 0; i < Country.length; i++) {
    if (Country[i] == 1 && arr[i] == 0) {
      arr[i] = 1;
      count += 1;
      count = search(arr, Countries, Countries[i], count);
    }
  }

  return count;
}

function solution(A) {
  var count = 0;
  var result = 0;
  var arr = new Array(A.length);

  arr.fill(0);

  for (var i = 0; i < A.length; i++) {
    if (arr[i] == 0) {
      count = 1;
      arr[i] = 1;

      count = search(arr, A, A[i], count);

      if (count > result) {
        result = count;
      }
    }
  }

  return result;
}
