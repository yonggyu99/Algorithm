function solution(m, n, board) {
    let grid = board.map(row => row.split(''));
    let totalErased = 0;
    
    while(true){
        let targets = [];
        
        for(let i = 0; i < m-1; i++){
            for(let j = 0; j < n-1; j++){
                const char = grid[i][j];
                if(char !== 0 && char === grid[i][j + 1] && char === grid[i + 1][j] && char === grid[i + 1][j + 1]){
                    targets.push([i, j])
                }
            }
        }
        
        if(targets.length === 0) break;
        
        targets.forEach(([i, j]) => {
            if(grid[i][j] !== 0){grid[i][j] = 0; totalErased ++;}
            if(grid[i+1][j] !== 0){grid[i+1][j] = 0; totalErased ++;}
            if(grid[i][j+1] !== 0){grid[i][j+1] = 0; totalErased ++;}
            if(grid[i+1][j+1] !== 0){grid[i+1][j+1] = 0; totalErased ++;}
        })
        
        for(let j = 0; j < n; j++){
            let column = [];
            for(let i = m-1; i >= 0; i--){
                if(grid[i][j] !== 0){column.push(grid[i][j]);}
            }
            
            for(let i = m - 1; i >= 0; i--){
                grid[i][j] = column.length > 0 ? column.shift() : 0;
            }
        }
    }
    return totalErased;
}