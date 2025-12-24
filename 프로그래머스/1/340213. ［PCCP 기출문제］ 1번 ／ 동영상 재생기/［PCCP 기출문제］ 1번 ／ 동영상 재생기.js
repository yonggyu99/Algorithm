function toSec(t) {
  const [m, s] = t.split(":").map(Number);
  return m * 60 + s;
}

function toStr(sec) {
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  return String(m).padStart(2, "0") + ":" + String(s).padStart(2, "0");
}

function solution(video_len, pos, op_start, op_end, commands) {
  const video = toSec(video_len);
  let cur   = toSec(pos);
  const opS = toSec(op_start);
  const opE = toSec(op_end);

  if (cur >= opS && cur < opE) {
    cur = opE;
  }

  for (const cmd of commands) {
    if (cmd === "prev") {
      cur = Math.max(0, cur - 10);
    } else if (cmd === "next") {
      cur = Math.min(video, cur + 10);
    }

    if (cur >= opS && cur < opE) {
      cur = opE;
    }
  }

  return toStr(cur);
}
