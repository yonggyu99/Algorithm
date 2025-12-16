function solution(keymap, targets) {
    const minPress = {};
    
    keymap.forEach((keyStr)=>{
        for(let i = 0; i<keyStr.length; i++){
            const ch = keyStr[i];
            const pressCount = i+1;
            
            if(minPress[ch] === undefined || pressCount < minPress[ch]){
                minPress[ch] = pressCount;
            }
        }
    });
    
    const answer = targets.map((word) => {
        let sum = 0;
        
        for(const ch of word){
            if(minPress[ch] === undefined){
                return -1;
            }
            sum += minPress[ch]
        }
        return sum;
    });
                               
    
    return answer;
}