function solution(n, words) {
    const used = new Set();
    
    for(let i =0; i <words.length; i++){
        const word = words[i];
        const prev = words[i-1];
        
        if(used.has(word)){
            const person = (i % n) + 1;
            const turn = Math.floor(i / n) + 1;
            return [person, turn];
        }
        
        if(i > 0 && prev[prev.length - 1] !== word[0]){
            const person = (i % n) + 1;
            const turn = Math.floor(i /n) + 1;
            return [person, turn];
        }
        
        if(word.length === 1){
            const person = (i % n) + 1;
            const turn = Math.floor(i /n) + 1;
            return [person, turn];
        }
        used.add(word);
    }
    return [0,0];
}