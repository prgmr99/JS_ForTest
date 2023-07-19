const year = new Date().getFullYear();
const month = new Date().getMonth() + 1;
const date = new Date().getDate();

const curTime = new Date("2022-01-20");
const expireTime = new Date();

const exYear = curTime.setFullYear(curTime.getFullYear());
const exMonth = curTime.setMonth(curTime.getMonth() + 3);
const exDate = curTime.setDate(curTime.getDate());

console.log(exYear, exMonth, exDate);
console.log(curTime);
