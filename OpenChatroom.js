function solution(record) {
  const userMap = new Map();
  const result = [];

  for (const entry of record) {
    const [action, userId, userName] = entry.split(" ");

    if (action === "Enter" || action === "Change") {
      userMap.set(userId, userName);
    }
  }

  for (const entry of record) {
    const [action, userId] = entry.split(" ");

    if (action === "Enter") {
      result.push(`${userMap.get(userId)}님이 들어왔습니다.`);
    } else if (action === "Leave") {
      result.push(`${userMap.get(userId)}님이 나갔습니다.`);
    }
  }

  return result;
}

console.log(
  solution([
    "Enter uid1234 Muzi",
    "Enter uid4567 Prodo",
    "Leave uid1234",
    "Enter uid1234 Prodo",
    "Change uid4567 Ryan",
  ])
); // ["Prodo님이 들어왔습니다.", "Ryan님이 들어왔습니다.", "Prodo님이 나갔습니다.", "Prodo님이 들어왔습니다."]
