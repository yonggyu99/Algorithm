function solution(bandage, health, attacks) {
  const [t, x, y] = bandage;

  const maxHealth = health;    // 최대 체력 (상한)
  let curHealth = health;      // 현재 체력
  let streak = 0;              // 연속으로 붕대를 감은 초 수
  let attackIndex = 0;         // attacks에서 현재 처리할 공격 인덱스
  const lastTime = attacks[attacks.length - 1][0]; // 마지막 공격 시간

  for (let time = 1; time <= lastTime; time++) {
    if (attackIndex < attacks.length && attacks[attackIndex][0] === time) {
      const damage = attacks[attackIndex][1];
      curHealth -= damage;
      attackIndex++;
      streak = 0;

      if (curHealth <= 0) {
        return -1;
      }
    } else {

        
      curHealth += x;
      streak++;

      if (streak === t) {
        curHealth += y;
        streak = 0;
      }

      if (curHealth > maxHealth) {
        curHealth = maxHealth;
      }
    }
  }

  return curHealth;
}
