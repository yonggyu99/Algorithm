function solution(priorities, location) {
    var answer = 0;
    
    let queue = priorities.map((priority, index) =>  ({index : index, priority : priority}))
    
    while(queue.length > 0){
        let current = queue.shift();
        let hasHigher = false;
        
        for(let i = 0; i < queue.length; i++){
            if(queue[i].priority > current.priority){
                hasHigher = true;
                break;
            }
        }
        
        if(hasHigher){
            queue.push(current);
        }else{
            answer++
            if(current.index === location) return answer
        }
        
        
    }

}