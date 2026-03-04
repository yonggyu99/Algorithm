function solution(a, b) {
    a = a.toString();
    b = b.toString();
    let ab = Number(a + b);
    let ba = Number(b + a);
    return ab > ba ? ab : ba;
}