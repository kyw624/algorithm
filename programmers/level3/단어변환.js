function solution(begin, target, words) {
  if (!words.includes(target)) {
    return 0;
  }

  const visited = Array(words.length).fill(0);
  const queue = [[begin, 0]];

  while (queue.length) {
    const [current, count] = queue.shift();

    if (current === target) {
      return count;
    }

    words.forEach((word, i) => {
      if (compareDifferenceChar(current, word) === 1 && !visited[i]) {
        queue.push([word, count + 1]);
        visited[i] = 1;
      }
    });
  }
}

function compareDifferenceChar(word1, word2) {
  let result = 0;

  for (let i = 0; i < word1.length; i++) {
    if (word1[i] !== word2[i]) result++;
  }

  return result;
}

console.log(solution('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log', 'cog'])); // 4
console.log(solution('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log'])); // 0
