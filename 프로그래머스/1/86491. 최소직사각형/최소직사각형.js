function solution(sizes) {
    
    for(const size of sizes){
        size.sort((a , b) => b - a);
    }
    
    let maxWidth = 0;
    let maxHeight = 0;
    
    for(let i = 0; i < sizes.length; i ++){
    if(maxWidth < sizes[i][0]) maxWidth = sizes[i][0];
    if(maxHeight < sizes[i][1]) maxHeight = sizes[i][1];
        }
    return maxWidth * maxHeight;
}