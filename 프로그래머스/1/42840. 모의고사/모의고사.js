function solution(answers) {
    var answer = [];
    let people1 = [1, 2, 3, 4, 5];
    let people2 = [2, 1, 2, 3,2, 4, 2, 5];
    let people3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    
    let score = [0, 0, 0];
    
    for(let i = 0; i < answers.length; i++){
        if(answers[i] === people1[i % people1.length]) score[0]++;
        if(answers[i] === people2[i % people2.length]) score[1]++;
        if(answers[i] === people3[i % people3.length]) score[2]++;
    }
    
    let maxScore = Math.max(...score);
    
    for(let j = 0; j < 3; j++){
        if(score[j] === maxScore){
            answer.push(j+1);
        }
           }
    return answer;
}