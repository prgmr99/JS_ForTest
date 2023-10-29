function solution(dots) {
  const xArr = [];
  const yArr = [];

  for (let i = 0; i < dots.length; i++) {
    xArr.push(dots[i][0]);
    yArr.push(dots[i][1]);
  }

  const xSet = new Set([...xArr]);
  const ySet = new Set([...yArr]);

  const orgX = [...xSet];
  const orgY = [...ySet];
  return Math.abs(orgX[1] - orgX[0]) * Math.abs(orgY[1] - orgY[0]);
}
