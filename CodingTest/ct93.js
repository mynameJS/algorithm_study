function solution(n) {
  const binary = n.toString(2);
  let distance = 0;
  let zeroCount = 0;

  for (let i = 0; i < binary.length; i++) {
    if (binary[i] === "0") {
      zeroCount++;
    } else {
      if (zeroCount > distance) {
        distance = zeroCount;
        zeroCount = 0;
      }
    }
  }

  return distance + 1;
}
