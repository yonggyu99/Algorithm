function solution(s) {
  return s
    .split(" ")
    .map(word =>
      [...word]
        .map((ch, i) => (i % 2 === 0 ? ch.toUpperCase() : ch.toLowerCase()))
        .join("")
    )
    .join(" ");
}