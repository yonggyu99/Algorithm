function solution(n) {
    if (n <= 2) return n;

    const MOD = 1000000007;
    let prev2 = 1;
    let prev1 = 2;
    let current = 0;
    
    let i = 3;
    while (i <= n) {
        current = (prev1 + prev2) % MOD;
        
        prev2 = prev1;
        prev1 = current;
        
        i++;
    }

    return current;
}