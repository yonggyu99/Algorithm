function solution(k, m, score) {
    var answer = 0;
    score.sort((a, b) => b - a);
    
    let profit = 0;
    
    for (let i = m - 1; i < score.length; i+=m){
        const minScoreInBox = score[i];
        profit += minScoreInBox * m; 
    }
    return profit;
}