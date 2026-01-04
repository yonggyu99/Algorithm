function solution(progresses, speeds) {
    const q = progresses.map((p, i) => Math.ceil((100 - p) / speeds[i]));
    
    const result = [];
    let front = 0;
    
    while(front < q.length){
        const deployDay = q[front];
        let count = 1;
        front ++;
    
        while(front < q.length && q[front] <= deployDay){
            count++;
            front++;
        }
    result.push(count);
    
    }    
    return result;
}