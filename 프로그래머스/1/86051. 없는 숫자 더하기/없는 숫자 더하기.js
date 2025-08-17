function solution(numbers) {
    var answer = 45;
    var number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    for(var i = 0; i<numbers.length; i++){
        var check = numbers[i];
        for(var j = 0; j<number.length; j++){
            if(check===number[j]){
                answer -= check;
            }
        }
    }
    return answer;
}