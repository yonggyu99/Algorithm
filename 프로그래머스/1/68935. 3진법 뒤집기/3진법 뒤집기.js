function solution(n) {
    var answer = 0;
    var arr = [];
    while(n>0){
        arr.push(n%3)
        n/=3;
        n = Math.floor(n);
    }
    for(var i = arr.length-1; i>=0; i--){
        answer += (arr[i] * (3**(arr.length-1-i)))
    }
    console.log(arr)
    
    return answer;
}