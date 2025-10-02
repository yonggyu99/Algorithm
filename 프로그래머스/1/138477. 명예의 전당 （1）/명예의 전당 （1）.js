function solution(k, score) {
    var answer = [];
    var now = [];
    for(var i = 0; i < score.length; i++){
        now.push(score[i]);
        now.sort((a,b) => b-a);
        if(now.length > k){
            now.pop()
        }
        
        let min = now[now.length-1];
        answer.push(min);
    }
    return answer;
}