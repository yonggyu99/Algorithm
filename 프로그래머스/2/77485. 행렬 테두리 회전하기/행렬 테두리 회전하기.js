function solution(rows, columns, queries) {
    const answer = [];
    
    let matrix = Array.from({ length: rows }, (_, r) => 
        Array.from({ length: columns }, (_, c) => (r * columns) + (c + 1))
    );

    for (let [x1, y1, x2, y2] of queries) {
        const r1 = x1 - 1, c1 = y1 - 1, r2 = x2 - 1, c2 = y2 - 1;
        
        const temp = matrix[r1][c1];
        let minVal = temp;

        for (let i = r1; i < r2; i++) {
            matrix[i][c1] = matrix[i + 1][c1];
            minVal = Math.min(minVal, matrix[i][c1]);
        }

        for (let i = c1; i < c2; i++) {
            matrix[r2][i] = matrix[r2][i + 1];
            minVal = Math.min(minVal, matrix[r2][i]);
        }

        for (let i = r2; i > r1; i--) {
            matrix[i][c2] = matrix[i - 1][c2];
            minVal = Math.min(minVal, matrix[i][c2]);
        }

        for (let i = c2; i > c1 + 1; i--) {
            matrix[r1][i] = matrix[r1][i - 1];
            minVal = Math.min(minVal, matrix[r1][i]);
        }
        
        matrix[r1][c1 + 1] = temp;
        
        answer.push(minVal);
    }

    return answer;
}