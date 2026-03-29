function solution(num_list) {
    let answer = [...num_list];
    const length = answer.length;
    if(answer[length - 1] <= answer[length - 2]){
        answer.push(answer[length - 1] * 2)
    }
    else answer.push(answer[length - 1] - answer[length - 2])
    return answer;
}