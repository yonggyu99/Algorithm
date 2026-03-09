function solution(data, col, row_begin, row_end) {
    let answer = 0;

    data.sort((a, b) => {
        if (a[col - 1] === b[col - 1]) {
            return b[0] - a[0];
        }
        return a[col - 1] - b[col - 1];
    });
    
    for (let i = row_begin; i <= row_end; i++) {
        let currentSi = 0;
        
        const row = data[i - 1];
        
        for (let val of row) {
            currentSi += (val % i);
        }
        
        answer ^= currentSi;
    }

    return answer;
}