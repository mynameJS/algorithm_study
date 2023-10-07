// 신고 결과 받기
// https://school.programmers.co.kr/learn/courses/30/lessons/92334

function solution(id_list, report, k) {
  const newReport = [...new Set(report)];

  const result = {};
  const id_report = {};
  id_list.forEach((v) => {
    result[v] = 0;
    id_report[v] = [];
  });
  newReport.forEach((v) => {
    const list = v.split(" ");
    [id, reportedId] = list;
    id_report[id] = [...id_report[id], reportedId];
    result[reportedId] += 1;
  });

  // 정지당한 유저
  const suspendedUsers = id_list.filter((v) => result[v] >= k);

  let answer = [];
  for (const key in id_report) {
    let count = 0;
    suspendedUsers.forEach((v) => {
      if (id_report[key].includes(v)) {
        count++;
      }
    });
    answer = [...answer, count];
  }
  return answer;
}

// 한 3주전에 처음 맞닥뜨렸던 문제..그때는 도저히 감이 안잡혀서 못풀었던 기억이 있다...
// 여기서 막히고 나서 한동안 코테 안풀다가 Lv.0 새로나온게 있길래 그거 한 100문제 후딱 풀고 다시 도전하였다.
// 그때는 하루종일 고민해도 안풀리던게 지금은 한 2시간정도 고민한 후에 풀 수 있게 되었다...진짜 후련하다
// 이 문제를 냅두고 다른거 풀때마다 아..저거 언젠간 풀어야 하는데 이런 생각이 많이 들었는데 드디어 풀었구나 ㅠㅠ
