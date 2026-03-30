function solution(arr){
    let answer = [];
    
    for(const number of arr){
        answer.push(number);
        if(answer[answer.length - 1] === answer[answer.length - 2]){
            answer.pop();
        }
    }
    
    return answer
}