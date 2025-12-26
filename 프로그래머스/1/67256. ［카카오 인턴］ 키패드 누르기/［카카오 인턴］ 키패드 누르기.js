function solution(numbers, hand) {
    let answer = '';
    
    const pos = {
        1: [0 ,0],
        2: [0 ,1],
        3: [0 ,2],
        4: [1 ,0],
        5: [1 ,1],
        6: [1 ,2],
        7: [2 ,0],
        8: [2 ,1],
        9: [2 ,2],
        0: [3 ,1],
    };
    
    let leftPos = [3, 0];
    let rightPos = [3, 2];
    
    const mainHand = hand === "right" ? "R" : "L";
    
    for(const num of numbers) {
        
        if (num === 1 || num === 4|| num === 7){
            answer += "L";
            leftPos = pos[num];
            continue;
        }
        
        if (num === 3 || num === 6|| num === 9){
            answer += "R";
            rightPos = pos[num];
            continue;
        }
        
        const [tr, tc] = pos[num];
        
        const leftDist = Math.abs(leftPos[0] -tr) + Math.abs(leftPos[1] - tc);
        
        const rightDist = Math.abs(rightPos[0] - tr) + Math.abs(rightPos[1] - tc);
        
        if(leftDist < rightDist){
            answer += "L";
            leftPos = [tr, tc];
        }
        else if(rightDist < leftDist){
            answer+= "R";
            rightPos = [tr, tc];
        }
        else {
            if(mainHand === "R"){
                answer+="R";
                rightPos = [tr, tc];
            }else{
                answer+="L";
                leftPos = [tr, tc];
            }
        }
    }
    
    return answer;
}