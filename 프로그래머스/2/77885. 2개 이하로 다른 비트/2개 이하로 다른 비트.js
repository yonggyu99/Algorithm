function solution(numbers) {
    return numbers.map(n => {
        let x = BigInt(n);
        if (x % 2n === 0n) return Number(x + 1n);
        
        let lastZero = (~x & (x + 1n));
        
        return Number(x + lastZero - (lastZero >> 1n));
    });
}