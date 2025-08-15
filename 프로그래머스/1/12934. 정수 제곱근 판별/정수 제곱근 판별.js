function solution(n) {
    var answer = 0;
    var number = Math.sqrt(n);
    if(Number.isInteger(number)){
        return (number+1)*(number+1);
    }
    else
    return -1;
}