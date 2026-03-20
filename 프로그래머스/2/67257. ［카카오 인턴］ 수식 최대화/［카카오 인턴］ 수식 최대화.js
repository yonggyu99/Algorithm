function solution(expression) {
    let maxReward = 0n;

    const tokens = expression.split(/(\D)/);

    const priorities = [
        ['+', '-', '*'], ['+', '*', '-'],
        ['-', '+', '*'], ['-', '*', '+'],
        ['*', '+', '-'], ['*', '-', '+']
    ];

    for (let priority of priorities) {
        let tempTokens = [...tokens];

        for (let op of priority) {
            for (let i = 0; i < tempTokens.length; i++) {
                if (tempTokens[i] === op) {
                    const result = operate(tempTokens[i - 1], tempTokens[i + 1], op);
                    
                    tempTokens.splice(i - 1, 3, result);
                    
                    i--;
                }
            }
        }

        const finalVal = tempTokens[0] < 0n ? -tempTokens[0] : tempTokens[0];
        
        if (finalVal > maxReward) {
            maxReward = finalVal;
        }
    }

    return Number(maxReward);
}

function operate(a, b, op) {
    a = BigInt(a);
    b = BigInt(b);
    if (op === '+') return a + b;
    if (op === '-') return a - b;
    if (op === '*') return a * b;
}