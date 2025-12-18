function solution(n, lost, reserve) {
    const realLost = lost.filter(l => !reserve.includes(l));
    const realReserved = reserve.filter(r => !lost.includes(r));
    
    realLost.sort((a, b) => a - b);
    let reserved = new Set(realReserved);
    let answer = 0;
    
    for(let i = 0; i < realLost.length; i++){
        if(reserved.has(realLost[i] - 1)){
            answer ++;
            reserved.delete(realLost[i] - 1)
        }
        else if(reserved.has(realLost[i] + 1)){
            answer ++;
            reserved.delete(realLost[i] + 1)
        }
    }
    return n - realLost.length + answer;
}