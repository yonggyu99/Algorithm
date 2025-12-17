function solution(participant, completion) {
    const counts = {};
    
    for(const name of participant){
        if(counts[name]===undefined){
            counts[name] = 1; 
        }
        else{counts[name] += 1}
    }
    
    for(const name of completion){
        counts[name] -= 1;
    }
    
    for(const name in counts){
        if(counts[name] > 0){
            return name;
        }
    }
}