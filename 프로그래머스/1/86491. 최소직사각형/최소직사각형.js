function solution(sizes) {
    let maxWidth = 0;
    let maxHeight = 0;
    
    for(const [w, h] of sizes){
        const a = Math.max(w, h);
        const b = Math.min(w, h);
        
        if(a > maxWidth) maxWidth = a;
        if(b > maxHeight) maxHeight = b;
    }
    
    
    
    return maxHeight * maxWidth;
}