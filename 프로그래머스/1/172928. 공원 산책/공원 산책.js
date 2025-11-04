function solution(park, routes) {
  let x = 0, y = 0;

  // 시작점 찾기
  for (let i = 0; i < park.length; i++) {
    const col = park[i].indexOf('S');
    if (col !== -1) {
      x = i;
      y = col;
      break;
    }
  }

  // 방향 정의 (동, 서, 남, 북)
  const dir = {
    E: [0, 1],
    W: [0, -1],
    S: [1, 0],
    N: [-1, 0],
  };

  // 명령 수행
  for (const route of routes) {
    const [d, nStr] = route.split(' ');
    const n = Number(nStr);

    let nx = x, ny = y;
    let valid = true;

    // 이동 시뮬레이션
    for (let i = 0; i < n; i++) {
      nx += dir[d][0];
      ny += dir[d][1];

      // 경계 검사
      if (nx < 0 || ny < 0 || nx >= park.length || ny >= park[0].length) {
        valid = false;
        break;
      }

      // 장애물 검사
      if (park[nx][ny] === 'X') {
        valid = false;
        break;
      }
    }

    // 유효한 경우만 이동
    if (valid) {
      x = nx;
      y = ny;
    }
  }

  return [x, y];
}