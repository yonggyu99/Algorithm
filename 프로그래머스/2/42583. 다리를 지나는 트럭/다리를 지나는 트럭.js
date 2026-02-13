function solution(bridge_length, weight, truck_weights) {
    let time = 0;
    let bridge = new Array(bridge_length).fill(0);
    let bridgeWeight = 0;
    
    while(truck_weights.length > 0){
        time++;
        
        let out = bridge.shift();
        bridgeWeight -= out;
        
        if(bridgeWeight + truck_weights[0] <= weight){
            let In = truck_weights.shift();
            bridge.push(In);
            bridgeWeight += In;
        }else{
            bridge.push(0);
        }
    }
    return time + bridge_length;
}