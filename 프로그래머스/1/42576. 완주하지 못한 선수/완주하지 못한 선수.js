function solution(participant, completion) {
    var answer = '';
    
    let comHash = new Map();
    
    for(const name of participant){
        comHash.set(name, (comHash.get(name) || 0) + 1);
    }
    
    for(const name of completion){
        comHash.set(name, (comHash.get(name) || 0) - 1);
    }
    
    for(const [name, count] of comHash){
        if(count > 0){
            return name
        }
    }
    
}