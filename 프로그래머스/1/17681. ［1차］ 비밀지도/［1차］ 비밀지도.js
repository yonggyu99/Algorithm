function solution(n, arr1, arr2) {
  const result = [];

  for (let i = 0; i < n; i++) {
    const line = arr1[i] | arr2[i];
    const binary = line.toString(2);
    const padded = binary.padStart(n, "0");
    const row = padded.replace(/1/g, "#").replace(/0/g, " ");
    result.push(row);
  }

  return result;
}