function solution(food) {
    var answer = '';
    var left = '';
    var right = '';
    
    for(var i = 1; i < food.length; i++){
        left += String(i).repeat(Math.floor(food[i]/2))
    }
    
    for(var i = food.length-1; i > 0; i--){
        right += String(i).repeat(Math.floor(food[i]/2))
    }
    
    answer = left + '0' + right
    
    return answer;
}