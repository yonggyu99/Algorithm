function solution(answers) {
    const answer = [];
    
    const patterns = [
        [1, 2, 3, 4, 5],
        [2, 1, 2, 3, 2, 4, 2, 5],
        [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    ];

    const scores = [0, 0, 0];

    for (let i = 0; i < answers.length; i++) {
        if (answers[i] === patterns[0][i % patterns[0].length]) scores[0]++;
        if (answers[i] === patterns[1][i % patterns[1].length]) scores[1]++;
        if (answers[i] === patterns[2][i % patterns[2].length]) scores[2]++;
    }

    const maxScore = Math.max(...scores);

    for (let j = 0; j < scores.length; j++) {
        if (scores[j] === maxScore) {
            answer.push(j + 1);
        }
    }

    return answer;
}