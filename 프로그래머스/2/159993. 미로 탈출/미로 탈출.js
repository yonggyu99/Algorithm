function solution(maps) {
    var answer = 0;
    const height = maps.length;
    const width = maps[0].length;
    let startPos, leverPos, endPos
    
    for(let i = 0; i < height; i++){
        for(let j = 0; j < width; j++){
            if(maps[i][j] === 'S') startPos = [i, j];
            if(maps[i][j] === 'L') leverPos = [i, j];
            if(maps[i][j] === 'E') endPos = [i, j];
        }
    }
    
    function findShortWay(start, target){
        let time = 0;
        const[startRow, startCol] = start;
        const[targetRow, targetCol] = target;
        
        let visited = Array.from({length : height}, () => Array(width).fill(false));
        let queue = [[startRow, startCol, time]];
        
        visited[startRow][startCol] = true;
        
        const moveRow = [-1, 1, 0, 0];
        const moveCol = [0, 0, -1, 1];
        
        while(queue.length > 0){
            const [currRow, currCol, currTime] = queue.shift();
            
            if(currRow === targetRow && currCol === targetCol) return currTime;
            
            for(let i = 0; i < 4; i++){
                const nextRow = currRow + moveRow[i];
                const nextCol = currCol + moveCol[i];
                
                if(nextRow < height 
                   && nextCol < width 
                   && nextCol >= 0
                   && nextRow >= 0
                   && maps[nextRow][nextCol] !== "X" 
                   && !visited[nextRow][nextCol]){
                    queue.push([nextRow, nextCol, currTime + 1]);
                    visited[nextRow][nextCol] = true;
                }
            }
        }
        
        return - 1;
    }
    
    const timeLever = findShortWay(startPos, leverPos);
    if(timeLever === -1) return -1;
    
    const timeEnd = findShortWay(leverPos, endPos);
    if(timeEnd === -1) return -1;
    
    
    return timeLever + timeEnd;
}