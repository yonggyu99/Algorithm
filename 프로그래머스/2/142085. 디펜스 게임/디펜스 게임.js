class MaxHeap {
    constructor() {
        this.heap = [];
    }
    
    push(val){
        this.heap.push(val);
        this.bubbleUp();
    }
    
    pop(val){
        if (this.size() === 1) return this.heap.pop();
        const max = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown();
        return max;
    }
    
    size(){
        return this.heap.length;
    }
    
    bubbleUp(){
        let index = this.heap.length - 1;
        while(index > 0){
            let parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[parentIndex] >= this.heap[index]) break;
            [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
            index = parentIndex;
        }
    }
    
    bubbleDown(){
        let index = 0;
        const length = this.heap.length;
        while(true){
           let leftChildIndex = 2 * index + 1;
            let rightChildIndex = 2 * index + 2;
            let swapIndex = null;

            if (leftChildIndex < length) {
                if (this.heap[leftChildIndex] > this.heap[index]) {
                    swapIndex = leftChildIndex;
                }
            }

            if (rightChildIndex < length) {
                if (
                    (swapIndex === null && this.heap[rightChildIndex] > this.heap[index]) ||
                    (swapIndex !== null && this.heap[rightChildIndex] > this.heap[swapIndex])
                ) {
                    swapIndex = rightChildIndex;
                }
            }

            if (swapIndex === null) break;
            [this.heap[index], this.heap[swapIndex]] = [this.heap[swapIndex], this.heap[index]];
            index = swapIndex; 
        }
    }
}

function solution(n, k, enemy) {
    var answer = 0;
    const maxHeap = new MaxHeap();
    
    for(let i = 0; i < enemy.length; i++){
        const currentEnemy = enemy[i];
        
        n -= currentEnemy;
        maxHeap.push(currentEnemy);
        
        if(n < 0){
            if(k > 0){
                n += maxHeap.pop();
                k--;
            } else {
                break;
            }
        }
        
        answer++;
    }
    return answer;
}