function solution(a, b, n) {
    var answer = 0;
    
    while(n>=a){
        var exchanged = Math.floor(n/a)*b;
        answer += exchanged;
        n = exchanged + (n%a);
    }
    return answer;
}