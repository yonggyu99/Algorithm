function solution(bridge_length, weight, truck_weights) {
    var answer = 0;
    
    let bridge = Array(bridge_length).fill(0);
    let time = 0;
    let currWeight = 0;
    
    while(truck_weights.length > 0 || currWeight > 0){
        time++;
        
        let finished = bridge.shift();
        currWeight -= finished;
        
        if(truck_weights.length > 0){
            if(currWeight + truck_weights[0] <= weight){
                let nextTruck = truck_weights.shift();
                bridge.push(nextTruck);
                currWeight += nextTruck;
            }else{
                bridge.push(0)
            }
        }
    }
    return time;
}