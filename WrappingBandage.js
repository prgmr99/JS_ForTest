function solution(bandage, health, attacks) {
  let currentHealth = health;
  const maxHealth = health;
  let sequentialSuccess = 0;
  const attackMap = new Map();

  // 공격 시간을 빠르게 조회할 수 있도록 맵 생성
  for (const [time, damage] of attacks) {
    attackMap.set(time, damage);
  }

  for (let time = 0; time <= attacks[attacks.length - 1][0]; time++) {
    if (attackMap.has(time)) {
      // 플레이어가 공격받음
      currentHealth -= attackMap.get(time);
      sequentialSuccess = 0; // 공격 받으면 붕대 카운터 초기화
    } else {
      // 공격이 없으면 치유 적용
      sequentialSuccess++;

      // 일정 시간 공격을 받지 않으면 붕대 치유 적용
      if (sequentialSuccess >= bandage[0]) {
        currentHealth += bandage[2];
        sequentialSuccess = 0; // 붕대 사용 후 초기화
      }

      // 패시브 치유 적용
      if (currentHealth < maxHealth) {
        currentHealth += bandage[1];
      }
    }

    // 체력이 최대 체력을 초과하지 않도록 함
    if (currentHealth > maxHealth) {
      currentHealth = maxHealth;
    }

    // 체력이 1 미만이면 플레이어가 죽음
    if (currentHealth < 1) {
      return -1;
    }
  }

  // 마지막 공격 시간 이후의 체력 반환
  return currentHealth;
}
