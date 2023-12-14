// 제로베이스 코딩테스트

// 낱말 퍼즐을 풀려고 합니다. 퍼즐 판은 4 x 4 크기로 임의의 한글이 섞여 있습니다.
//  주어진 낱말이 퍼즐 판에 인접한 형태로 존재하는지 구하는 함수, solution을 완성해주세요.

function solution(puzzle, word) {
  const wordIdx = [];
  const wordArr = word.split("");

  wordArr.forEach((w) => {
    for (let i = 0; i < puzzle.length; i++) {
      for (let j = 0; j < puzzle.length; j++) {
        if (w === puzzle[i][j]) {
          wordIdx.push([i, j]);
        }
      }
    }
  });

  const filteredWordIdx = wordIdx.reduce((a, c) => {
    const [row, col] = c;
    const exists = a.some((item) => item[0] === row && item[1] === col);
    if (!exists) {
      a.push(c);
    }
    return a;
  }, []);

  if (word.length !== filteredWordIdx.length) return false;

  for (let i = 0; i < wordIdx.length - 1; i++) {
    const preWord = wordIdx[i];
    const nextWord = wordIdx[i + 1];
    console.log(preWord, nextWord);
    if (Math.abs(preWord[0] - nextWord[0]) > 1) return false;
    if (Math.abs(preWord[1] - nextWord[1]) > 1) return false;
  }

  return true;
}
