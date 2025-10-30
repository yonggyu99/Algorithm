function solution(elements) {
    var total = new Set();
    var len = elements.length;
    
    for(let length = 1; length <= len; length ++){
        for(let i = 0; i < len; i++){
            let sum =0;
            
            for(let j = 0; j < length; j++){
                sum += elements[(i + j)% len];
            }
            
            total.add(sum);
        }
    }
    
    return total.size;
}