function solution(storey) {
    let answer = 0;

    while (storey > 0) {
        let lastDigit = storey % 10;
        storey = Math.floor(storey / 10);

        if (lastDigit > 5) {
            answer += (10 - lastDigit);
            storey += 1;
        } else if (lastDigit < 5) {
            answer += lastDigit;
        } else {
            if (storey % 10 >= 5) {
                answer += 5;
                storey += 1;
            } else {
                answer += 5;
            }
        }
    }

    return answer;
}