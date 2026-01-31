function solution(order) {
    let result = 0;
    const stack = [];
    let currentBox = 1;

    for (const target of order) {
        while (currentBox <= target) {
            stack.push(currentBox);
            currentBox++;
        }

        if (stack.length > 0 && stack[stack.length - 1] === target) {
            stack.pop();
            result++;
        } else {
            break;
        }
    }

    return result;
}