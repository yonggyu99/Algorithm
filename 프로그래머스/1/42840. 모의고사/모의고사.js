function solution(answers) {
    var answer = [];
    const people = [[1, 2, 3, 4, 5], [2, 1, 2, 3, 2, 4, 2, 5], [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]];

    const answerCount = new Array(people.length).fill(0);
    
    for(let i = 0; i < people.length; i++){
        for(let j = 0; j < answers.length; j++){
            if(people[i][j % people[i].length] === answers[j]){
                answerCount[i]++;
            };
        }
    }
    
    const maxScore = Math.max(...answerCount);
    
    for(let i = 0; i < answerCount.length; i++){
        if(answerCount[i] === maxScore){
            answer.push(i + 1);
        }
    }
    
    
    
    return answer;
}