function solution(participant, completion) {
    
    let comHash = {};
    
    for(let name of participant){
        comHash[name] = (comHash[name] || 0) + 1;
    }
    
    for(let name of completion){
        comHash[name] = (comHash[name] || 0) - 1;
    }
    
    for(const name in comHash){
        if(comHash[name] > 0) return name;
    }
    

}