function solution(numbers) {
    return numbers.map(x => {
        if(x % 2 === 0){
            return x + 1;
        }
        
        let bit = '0' + x.toString(2);
        let idx = bit.lastIndexOf('01');
        
        let nextBit = bit.substring(0, idx) + '10' + bit.substring(idx+2);
        
        return parseInt(nextBit, 2);
    })
}