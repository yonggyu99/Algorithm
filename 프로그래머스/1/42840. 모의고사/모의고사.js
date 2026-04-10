function solution(answers) {
    var answer = [];
    
    const peopleList = [[1, 2, 3, 4, 5], [2, 1, 2, 3, 2, 4, 2, 5], [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]];
    const correct = [0, 0, 0];
    
    
    for(const people of peopleList){
        for(let i = 0; i < answers.length; i++){
            if(people[i % people.length] === answers[i]) correct[peopleList.indexOf(people)]++; 
        }
    }
    
    const maxScore = Math.max(...correct);
    
    for(let i = 0; i < correct.length; i++){
        if(correct[i] === maxScore) answer.push(i + 1);
    }
    
    return answer;
}