function solution(sizes) {
    var answer = 0;
    
    let maxW = 0;
    let maxH = 0;
    
    for(const card of sizes){
        card.sort((a, b) => b - a);
    }
    
    for(let i = 0; i < sizes.length; i++){
        if(maxW < sizes[i][0]) maxW = sizes[i][0];
        if(maxH < sizes[i][1]) maxH = sizes[i][1];
    }
    
    return maxW * maxH;
}