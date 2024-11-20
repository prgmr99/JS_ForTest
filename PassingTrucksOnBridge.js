function solution(bridge_length, weight, truck_weights) {
  let time = 0;
  let bridgeQueue = Array(bridge_length).fill(0);
  let currentWeight = 0;

  while (bridgeQueue.length > 0) {
    time++;
    currentWeight -= bridgeQueue.shift();

    if (truck_weights.length > 0) {
      if (currentWeight + truck_weights[0] <= weight) {
        let truck = truck_weights.shift();
        bridgeQueue.push(truck);
        currentWeight += truck;
      } else {
        // 다리에 오를 수 없으면 빈 공간을 추가 -> 빈 공간을 빼서 덧셈에는 영향이 가지 않음..
        bridgeQueue.push(0);
      }
    }
  }

  return time;
}
