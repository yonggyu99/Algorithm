function solution(genres, plays) {
    let answer = [];
    
    let genTotal = new Map();
    let genList = new Map();
    
    for(let i = 0; i < genres.length; i++){
        genTotal.set(genres[i], (genTotal.get(genres[i]) || 0) + plays[i])
        
        if(!genList.has(genres[i])){
            genList.set(genres[i], []);
        }
        
        genList.get(genres[i]).push({id : i, play : plays[i]})
    }
    
    const sortedGenTotal = [...genTotal.entries()];
    sortedGenTotal.sort((a, b) => b[1] - a[1]);
    
    const sortedGenType = sortedGenTotal.map(type => type[0])
    
    for(const type of sortedGenType){
        let songs = genList.get(type);
        
        songs.sort((a, b) => {
            if(a.play === b.play){
                return a.id - b.id
            }
            return b.play - a.play
        });
        
        answer.push(...songs.slice(0, 2).map(song => song.id));
        
    console.log(genList.get(type))    
    }
    
    
    return answer;
}