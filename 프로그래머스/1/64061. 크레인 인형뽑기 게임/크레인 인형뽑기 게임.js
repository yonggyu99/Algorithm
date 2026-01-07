function solution(board, moves) {
    const basket = [];
    let removed = 0;
    
    for(let i = 0; i < moves.length; i++){
        const col = moves[i] - 1;
        
        for(let row = 0; row < board.length; row++){
            const doll = board[row][col];
            
            if(doll !== 0){
                board[row][col] = 0;
                
                const top = basket[basket.length - 1];
                
                if(top === doll){
                    basket.pop();
                    removed += 2;
                }else{
                    basket.push(doll);
                }
                
                break;
                
            }
        }
    }
    
    return removed;
}