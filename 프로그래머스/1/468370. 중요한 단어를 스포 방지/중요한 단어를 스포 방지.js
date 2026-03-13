function solution(message, spoiler_ranges) {
    var answer = 0;
    
    const spoilerBool = Array(message.length).fill(false);
    
    for(let [start, end] of spoiler_ranges){
        for(let i = start; i <=end; i++){
            spoilerBool[i] = true;
        }
    }
    
    let wordObjects = [];
    let currentWord = "";
    let startIndex = -1;
    
    for(let i = 0; i <= message.length; i++){
        if(i < message.length && message[i] !== " "){
            if(startIndex === -1){
                startIndex = i;
            }
            currentWord += message[i];
        }
        
        else{
            if(currentWord.length > 0){
                const end = i - 1;
                
                let isSpoiled = false;
                
                for(let j = startIndex; j <= end; j++){
                    if(spoilerBool[j]){
                        isSpoiled = true;
                        break;
                    }
                }
                
                wordObjects.push({
                    text : currentWord,
                    start : startIndex,
                    end : end,
                    isSpoiled : isSpoiled
                });
                
                currentWord = "";
                startIndex = -1;
            }
        }
    }
    
    const blackList = new Set();
    
    for(let i = 0; i < wordObjects.length; i++){
        if(!wordObjects[i].isSpoiled){
            blackList.add(wordObjects[i].text);
        }
    }
    
    const revealedWordObjects = new Set();
    const importantWordsFound = new Set();

    for (let [sRange, eRange] of spoiler_ranges) {
        let newlyRevealed = [];

        for (let word of wordObjects) {
            
            const isOverlap = Math.max(word.start, sRange) <= Math.min(word.end, eRange);
            
            if (isOverlap && !revealedWordObjects.has(word)) {
                newlyRevealed.push(word);
            }
        }

        newlyRevealed.sort((a, b) => a.start - b.start);

        for (let word of newlyRevealed) {
            revealedWordObjects.add(word);

            if (
                word.isSpoiled &&
                !blackList.has(word.text) &&
                !importantWordsFound.has(word.text)
            ) {
                importantWordsFound.add(word.text);
                answer++;
            }
        }
    }
    
    
    return answer;
}