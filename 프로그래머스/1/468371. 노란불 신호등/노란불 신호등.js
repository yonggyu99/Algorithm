function solution(signals) {
    var answer = 0;
    let term = Array(signals.length).fill(0);
    
    function gcd (a, b){
        return b === 0 ? a : gcd(b, a%b)
    };
    
    for(let i = 0; i < signals.length; i++){
        term[i] = signals[i][0] + signals[i][1] + signals[i][2];
    }
    
    let limit = term[0];
    
    for(let i = 0; i < term.length; i++){
        limit = (limit * term[i])/gcd(limit, term[i]);
    }
    
    for(let t = 1; t <= limit; t++){
        const allYellow = signals.every((sig, idx) => {
            const T = term[idx];
            const G = sig[0];
            const Y = sig[1];
            
            const currentTime = (t - 1) % T;
            
            return currentTime >= G && currentTime < (G + Y);
        });
        
        if(allYellow) return t;
    }

    return -1;
}