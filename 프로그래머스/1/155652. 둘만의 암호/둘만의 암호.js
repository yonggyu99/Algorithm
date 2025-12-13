function solution(s, skip, index) {
    const skipSet = new Set(skip.split(""))
    const alphabet = [];
    
    for(let code = 97; code <= 122; code++){
        const ch = String.fromCharCode(code);
        if(!skipSet.has(ch)){
            alphabet.push(ch);
        }
    }
    
    const len = alphabet.length;
    let result = "";
    
    for (const ch of s){
        const currentIndex = alphabet.indexOf(ch);
        const newIndex = (currentIndex + index) % len;
        result += alphabet[newIndex];
    }
    return result;
}