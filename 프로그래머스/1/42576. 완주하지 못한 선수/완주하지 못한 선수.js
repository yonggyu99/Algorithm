function solution(participant, completion) {
    let answer = '';
    const name = {};
    
    for(const people of participant){
        name[people] = (name[people] || 0)  + 1;
    }

    
    for(const complete of completion){
        if(name[complete] > 0){
            name[complete] -= 1;
        }
    }
    
    for(const remain in name){
        if(name[remain] > 0){
            answer += remain
        }
    }
    return answer;
}