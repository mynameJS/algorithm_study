// 제로베이스 코딩테스트

// 확진자 동선 겹침 리스트

function solution(history, infected) {
  const infectorList = new Set();

  for (const person of history) {
    if (person < 0) {
      infectorList.delete(Math.abs(person));
      if (person === -infected) break;
    } else {
      infectorList.add(person);
    }
    if (infectorList.has(infected)) {
      infectorList.add(Math.abs(person));
    }
  }

  return [...infectorList].sort((a, b) => a - b);
}
