// 영어 끝말잇기
// https://school.programmers.co.kr/learn/courses/30/lessons/12981

function solution(n, words) {
  for(let i = 0; i < words.length; i++){
      if(words[i+1] === undefined) return [0,0];
      const wrongWords = words.slice(0,i+1)
      if(words[i].at(-1) !== words[i+1][0] || wrongWords.includes(words[i+1])){
          return [((i+1)%n)+1, Math.floor((i+1)/n + 1)]
      }
  }
}