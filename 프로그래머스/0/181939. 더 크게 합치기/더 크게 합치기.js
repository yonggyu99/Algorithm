function solution(a, b) {
    let ab = a.toString() + b.toString();
    let ba = b.toString() + a.toString();
    return ab > ba ? Number(ab) : Number(ba);
}