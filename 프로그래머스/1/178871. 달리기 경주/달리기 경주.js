function solution(players, callings) {
    const position = {};
    
    players.forEach((name, idx) => {
        position[name] = idx;
    });
    
    for(let i = 0; i < callings.length; i ++){
        const name = callings[i];
        const curRank = position[name];
        const beforeRank = curRank - 1;
        
        const beforePlayer = players[beforeRank];
        
        players[beforeRank] = name;
        players[curRank] = beforePlayer;
        
        position[name] = beforeRank;
        position[beforePlayer] = curRank;
    }
    return players;
}