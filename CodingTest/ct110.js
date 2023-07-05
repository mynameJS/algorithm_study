// 키패드 누르기
// https://school.programmers.co.kr/learn/courses/30/lessons/67256

function solution(numbers, hand) {
  var answer = "";
  let left = [3, 0];
  let right = [3, 2];
  const nums = [
    [3, 1],
    [0, 0],
    [0, 1],
    [0, 2],
    [1, 0],
    [1, 1],
    [1, 2],
    [2, 0],
    [2, 1],
    [2, 2],
  ];

  function clickByLeft(n) {
    left[0] = nums[n][0];
    left[1] = nums[n][1];
    return "L";
  }

  function clickByRight(n) {
    right[0] = nums[n][0];
    right[1] = nums[n][1];
    return "R";
  }

  const answerArr = numbers.map((n) => {
    if (n == 1 || n == 4 || n == 7) return clickByLeft(n);
    else if (n == 3 || n == 6 || n == 9) return clickByRight(n);
    else {
      const diffL =
        Math.abs(nums[n][0] - left[0]) + Math.abs(nums[n][1] - left[1]);
      const diffR =
        Math.abs(nums[n][0] - right[0]) + Math.abs(nums[n][1] - right[1]);

      if (diffL < diffR) return clickByLeft(n);
      else if (diffL > diffR) return clickByRight(n);
      else {
        if (hand == "left") return clickByLeft(n);
        else return clickByRight(n);
      }
    }
  });
  answer = answerArr.join("");
  return answer;
}

// 못풀었음... 현재 손가락 위치에서 절대값으로 거리 구하는 것 까지는 짜봤는데 예외코드 하나씩 짜다보니 어느새 명령형 처럼 풀고있는 나를 발견..
// 정답 코드 중에 내가 생각한 알고리즘과 가장 유사한 코드를 참고하였음
// 저렇게 이차원 배열로 핸드폰 키패드를 형상화 한 것이 신기했음 grid 용법이라고 하던데 css 에서나 보던 개념을 알고리즘에 적용시킬 줄은 상상도 못했다.
// 많은 걸 알아가지만 다시 한번 나의 문제 해결능력에 한계를 느낀다...정진하자 ㅠ
