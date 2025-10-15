function solution(array, commands) {
    var answer = [];
    var second_answer = [];
    var number = 0;
    for(var i = 0; i<commands.length; i++){
        second_answer = array.slice(commands[i][0]-1,commands[i][1])
        second_answer.sort((a,b) => a-b)
        number = second_answer[commands[i][2]-1];
        answer.push(number)
    }
    
    return answer;
}