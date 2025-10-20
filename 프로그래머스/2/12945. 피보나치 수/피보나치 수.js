function solution(n) {
    var answer = 0;
    let divider = 1234567;
    let pivot = new Array(n+1);
    
    pivot[0] = 0;
    pivot[1] = 1;
    
    for(var i = 2; i <= n; i++){
        pivot[i] = (pivot[i-2] + pivot[i-1])%divider;
    }
    return pivot[n];
}