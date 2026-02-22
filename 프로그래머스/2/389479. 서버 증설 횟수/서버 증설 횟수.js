function solution(players, m, k) {
    let count = 0;
    
    const serverTimeLine = Array(players.length).fill(0);
    
    for(let i = 0; i < players.length; i++){
        
        let requiredServer = Math.floor(players[i] / m);
        
        
        if(serverTimeLine[i] < requiredServer){
            
            let addServer = requiredServer - serverTimeLine[i];
            
            count += addServer;
            
            for(let j = i; j < serverTimeLine.length && j < i + k; j++){
                serverTimeLine[j] += addServer;
            }
        }
    }
    
    
    
    return count;
}