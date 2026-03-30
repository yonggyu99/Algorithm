function solution(prices) {
    const n = prices.length;
    const answer = new Array(n).fill(0);
    const stack = [];

    for (let i = 0; i < n; i++) {
        while (stack.length > 0 && prices[stack[stack.length - 1]] > prices[i]) {
            const topIndex = stack.pop();
            answer[topIndex] = i - topIndex;
        }
        stack.push(i);
    }

    while (stack.length > 0) {
        const topIndex = stack.pop();
        answer[topIndex] = n - 1 - topIndex;
    }

    return answer;
}