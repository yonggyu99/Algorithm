function solution(n, k) {
    const answer = [];
    
    let people = Array.from({ length: n }, (_, i) => i + 1);
    
    let fact = [1n]; 
    for (let i = 1; i <= n; i++) {
        fact[i] = fact[i - 1] * BigInt(i);
    }

    let bigK = BigInt(k) - 1n;

    for (let i = n; i > 0; i--) {
        const blockSize = fact[i - 1];

        const index = Number(bigK / blockSize);
        
        bigK %= blockSize;

        answer.push(people[index]);
        people.splice(index, 1);
    }

    return answer;
}