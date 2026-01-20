function solution(dirs) {
    let x = 0;
    let y = 0;
    const visited = new Set();
    let answer = 0;
    
    const move = {
        U : [0, 1],
        D : [0, -1],
        R : [1, 0],
        L : [-1, 0],
    };

    for(const dir of dirs){
        const[dx, dy] = move[dir];
        const nx = x + dx;
        const ny = y + dy;
        
        if(nx < -5 || nx > 5 || ny < -5 || ny > 5) continue;
        
        const path = 
              x < nx || (x === nx && y < ny) ? `${x},${y}-${nx},${ny}`: `${nx},${ny}-${x},${y}`;
        
        if(!visited.has(path)){
            visited.add(path);
            answer++;
        }
        
        x = nx;
        y = ny;
    }
    return answer;
}