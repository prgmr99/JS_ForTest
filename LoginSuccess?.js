function solution(id_pw, db) {
  let result = "fail";
  const myMap = new Map();
  db.map((e) => {
    myMap.set(e[0], e[1]);
  });

  for (const [key, value] of myMap) {
    if (key === id_pw[0] && value === id_pw[1]) {
      result = "login";
      return result;
    }
    if (key === id_pw[0] && value !== id_pw[1]) {
      result = "wrong pw";
    }
  }
  return result;
}
