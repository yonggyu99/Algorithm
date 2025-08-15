function solution(a, b) {
    var answer = 0;
    if(a<b){
        for(i=a; i<=b; i++){
            answer+=i;
        }
    }
    else if(b<a){
        for(i=b; i<=a; i++){
            answer+=i;
        }
    }
    else
        answer=a;
    return answer;
}