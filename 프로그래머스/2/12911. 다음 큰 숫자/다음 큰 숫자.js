function solution(n) {
    var answer = 0;
    var binary = n.toString(2).split('1').length - 1;
    while(true){
        n++;
        var nextBinary = n.toString(2).split('1').length - 1;
        if(binary === nextBinary){
            answer = nextBinary
            return n
        }
    }
    return answer;
}