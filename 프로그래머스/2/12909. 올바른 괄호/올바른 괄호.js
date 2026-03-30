function solution(s){
    let answer = true;
    let stack = [];
    
    for(const ch of s){
        stack.push(ch);
        if(stack[stack.length - 1] === ")" && stack[stack.length - 2] === "("){
            stack.pop();
            stack.pop();
        }
    }
    
    if(stack.length > 0) return false;
    
    return answer;
}