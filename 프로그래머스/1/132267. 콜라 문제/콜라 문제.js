function solution(a, b, n) {
    var answer = 0;
    var exchanged = 0;
    while(n>=a){
        exchanged = Math.floor(n/a)*b
        answer += exchanged;
        n = exchanged + (n%a)
    }
    return answer;
}