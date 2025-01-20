// fees: [180, 5000, 10, 600]
// records: 
// ["05:34 5961 IN", "06:00 0000 IN",
//  "06:34 0000 OUT", "07:59 5961 OUT", 
// "07:59 0148 IN", "18:59 0000 IN", 
// "19:09 0148 OUT", "22:59 5961 IN", 
// "23:00 5961 OUT"]
// result: [14600, 34400, 5000]

function solution(fees, records) {
  const answer = [];
  const recordsObj = {};

  for (let i = 0; i < records.length; i++) {
    const [time, carNum, state] = records[i].split(' ');
    
    if (!recordsObj[carNum]) {
      recordsObj[carNum] = [];
    }

    recordsObj[carNum].push([time, state]);
  }

  const carNums = Object.keys(recordsObj).sort((a, b) => a - b);

  for(let i = 0;i < carNums.length;i++) {
    const carNum = carNums[i];
    const record = recordsObj[carNum];
    
    let totalTime = 0;
    let isOut = false;
    let inTime = 0;
    let outTime = 0;

    for(let j = 0;j < record.length;j++) {
      const [time, state] = record[j];
      const [hour, minute] = time.split(':').map(Number);

      if (state === 'IN') {
        inTime = hour * 60 + minute;
        isOut = false;
      } else {
        outTime = hour * 60 + minute;
        totalTime += outTime - inTime;
        isOut = true;
      }
    }

    if (!isOut) {
      totalTime += 23 * 60 + 59 - inTime;
    }

    if (totalTime <= fees[0]) {
      answer.push(fees[1]);
    } else {
      answer.push(fees[1] + Math.ceil((totalTime - fees[0]) / fees[2]) * fees[3]);
    }
  }

  return answer;
}

console.log(solution([180, 5000, 10, 600], ["05:34 5961 IN", "06:00 0000 IN", "06:34 0000 OUT", "07:59 5961 OUT", "07:59 0148 IN", "18:59 0000 IN", "19:09 0148 OUT", "22:59 5961 IN", "23:00 5961 OUT"])); // [14600, 34400, 5000]