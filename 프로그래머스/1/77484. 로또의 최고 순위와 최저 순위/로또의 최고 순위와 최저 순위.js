function solution(lottos, win_nums) {
    const winSet = new Set(win_nums);
    
    let zeroCount = 0;
    let matchCount = 0;
    
    for(const num of lottos){
        if(num === 0){
            zeroCount ++;
        }
        else if(winSet.has(num)){
            matchCount ++;
        }
    }
    
    const bestMatch = matchCount + zeroCount;
    const worstMatch = matchCount;
    
    const getRank = (matches) => {
        if(matches < 2) return 6;
        
        return 7 - matches;
    }
    return [getRank(bestMatch), getRank(worstMatch)];
}