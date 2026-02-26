function solution(board) {
    const height = board.length;
    const width = board[0].length;
    
    let startPos, endPos;
    
    const map = Array.from({length : height}, () => Array(width).fill("."));
    
    for(let i = 0; i < height; i++){
        for(let j = 0; j < width; j++){
            map[i][j] = board[i][j];
        }
    }
    
    for(let i = 0; i < height; i++){
        for(let j = 0; j < width; j++){
            if(map[i][j] === "R"){
                startPos = [i, j];
            }
            
            if(map[i][j] === "G"){
                endPos = [i, j];
            }
        }
    }

    
    function foundShortWay(startPos, endPos, map){
        
        const [startRow, startCol] = startPos;
        const [endRow, endCol] = endPos;
        
        let visited = Array.from({length : height}, () => Array(width).fill(false));
        
        visited[startRow][startCol] = true
        let queue = [[startRow, startCol, 0]];
        
        const dr = [-1, 1, 0, 0];
        const dc = [0, 0, -1, 1];
        
        while(queue.length > 0){
            const [r, c, dist] = queue.shift();
            
            if (r === endRow && c === endCol) return dist;
            
            for(let i = 0; i < 4; i++){
                
                let nextR = r;
                let nextC = c;
                
                while(true){
                    let nr = nextR + dr[i];
                    let nc = nextC + dc[i];
                    
                    if(nr < 0 ||
                       nr >= height ||
                       nc < 0 ||
                       nc >= width ||
                       board[nr][nc] === 'D'){
                        break;
                    }
                    nextR = nr;
                    nextC = nc;
                }
                
                if (!visited[nextR][nextC]) {
                visited[nextR][nextC] = true;
                queue.push([nextR, nextC, dist + 1]);
                }
            }
        }
        
        return -1;
    }
    
    const shortWay = foundShortWay(startPos, endPos, map);
    
    if(shortWay === -1) return -1;
    
    
    return shortWay;
}