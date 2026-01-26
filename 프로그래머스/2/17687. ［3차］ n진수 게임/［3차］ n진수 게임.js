function solution(n, t, m, p) {
    let sequence = '';
    let num = 0;

    while (sequence.length < m * t) {
        sequence += num.toString(n);
        num++;
    }

    let answer = '';
    for (let i = 0; i < t; i++) {
        answer += sequence[i * m + (p - 1)];
    }

    return answer.toUpperCase();
}