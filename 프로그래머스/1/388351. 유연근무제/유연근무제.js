function solution(schedules, timelogs, startday) {
  const n = schedules.length;
  let result = 0;
    
  const addTenMinutes = (time) => {
    let hour = Math.floor(time / 100);
    let minute = time % 100;
    minute += 10;
    if (minute >= 60) {
      hour += Math.floor(minute / 60);
      minute %= 60;
    }
    return hour * 100 + minute;
  };

  for (let i = 0; i < n; i++) {
    const limit = addTenMinutes(schedules[i]);
    let success = true;

    for (let j = 0; j < 7; j++) {
      const day = (startday + j - 1) % 7 + 1;
      if (day === 6 || day === 7) continue;

      if (timelogs[i][j] > limit) {
        success = false;
        break;
      }
    }

    if (success) result++;
  }

  return result;
}