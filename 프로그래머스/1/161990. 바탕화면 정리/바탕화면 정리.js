function solution(wallpaper) {
    let leftX = Infinity;
    let leftY = Infinity;
    let rightX = 0;
    let rightY = 0;
    
    for(let i = 0; i < wallpaper.length; i++){
        for(let j = 0; j < wallpaper[0].length; j++){
            if(wallpaper[i][j] === "#"){
                if(i < leftX) leftX = i;
                if(i + 1 > rightX) rightX = i + 1;
                if(j < leftY) leftY = j;
                if(j + 1 > rightY) rightY = j + 1;
                
            }
        }
    }
    
    return [leftX,leftY,rightX,rightY];
}