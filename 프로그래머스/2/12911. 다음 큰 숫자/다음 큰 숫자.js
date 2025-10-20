function solution(n) {
    var answer = 0;
    let binary = n.toString(2).split('1').length-1;
    
    while(true){
        n++;
        let binary_next = n.toString(2).split('1').length-1;
        if(binary === binary_next){
            return n;
        }
    }
    return n;
}