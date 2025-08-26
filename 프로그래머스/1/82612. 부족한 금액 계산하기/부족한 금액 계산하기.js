function solution(price, money, count) {
    var answer = -1;
    var total = 0;
    for(var i = 1; i<=count; i++){
        total += price*i
    }
    
    if(money - total >= 0){
        return 0;
    }
    else{
        return Math.abs(money-total)
    }
}