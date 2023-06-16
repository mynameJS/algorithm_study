// 실패율
// https://school.programmers.co.kr/learn/courses/30/lessons/42889

function solution(N, stages) {
  const failureRateByStages = [];
  let usersInStages = stages.length;

  // 스테이지 별 실패율 배열로 만들기 (1,2,3,4 .. 단계 순서로 배열에 넣어줌)
  for (let i = 1; i < N + 1; i++) {
    let challengers = 0;
    for (let j = 0; j < stages.length; j++) {
      if (i === stages[j]) {
        challengers++;
      }
    }
    // 아무도 해당 스테이지에 도달하지 못할 경우 실패율이 0이기 때문에 분모가 0이 되어서 null 값이 나옴. 그래서 !! 불리언 값으로 바꿔서 false(!!null)가 나오면 강제로 0을 넣어줌
    if (!!challengers / usersInStages) {
      failureRateByStages.push(challengers / usersInStages);
    } else {
      failureRateByStages.push(0);
    }

    usersInStages -= challengers;
  }

  // 실패율 내림차순으로 정렬 후 각 스테이지단계로 치환해줘야함(같은 경우에는 더 작은 스테이지가 앞으로 오게)
  // 그래서 실패율 배열의 인덱스를 프로퍼티로 하는 객체를 만들어줌
  const failureRateByStagesObj = {};
  failureRateByStages.forEach((value, index) => {
    failureRateByStagesObj[index] = value;
  });

  // 원본 실패율 배열을 내림차순으로 정렬한 후, 실패율 배열의 값과 실패율 객체의 값이 일치하면  배열의 값을 프로퍼티로 바꿔줌
  failureRateByStages.sort((a, b) => b - a);
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (failureRateByStagesObj[i] === failureRateByStages[j]) {
        // 앞에서부터 순서대로 배열을 순회하므로 중복치환을 방지하기위해 break을 걸어줌
        failureRateByStages[j] = i + 1;
        break;
      }
    }
  }
  return failureRateByStages;
}

// 코테의 길은 멀고도 험하다...다른 사람 풀이 보면 6줄 짜리도 있드라....
