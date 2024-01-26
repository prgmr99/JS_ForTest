// 내 풀이
function solution(array, commands) {
  const result = [];

  commands.forEach((v) => {
    const temp = [];
    for (let i = v[0] - 1; i < v[1]; i++) {
      temp.push(array[i]);
    }
    temp.sort((a, b) => a - b);
    result.push(temp[v[2] - 1]);
  });

  return result;
}

// 다른 사람 풀이
function solution(array, commands) {
  return commands.map((command) => {
    const [sPosition, ePosition, position] = command;
    const newArray = array
      .filter(
        (value, fIndex) => fIndex >= sPosition - 1 && fIndex <= ePosition - 1
      )
      .sort((a, b) => a - b);

    return newArray[position - 1];
  });
}
