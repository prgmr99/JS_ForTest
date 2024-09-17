function solution(progresses, speeds) {
  const done = [];

  while (progresses.length > 0) {
    for (let i = 0; i < progresses.length; i++) {
      progresses[i] += speeds[i];
    }

    let doneCount = 0;
    while (progresses.length > 0 && progresses[0] >= 100) {
      progresses.shift();
      speeds.shift();
      doneCount++;
    }

    if (doneCount > 0) {
      done.push(doneCount);
    }
  }

  return done;
}
