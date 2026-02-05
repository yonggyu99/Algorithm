function solution(files) {
    return files.sort((a,b) => {
        const re = /^(\D+)(\d{1,5})/;
        const matchA = a.match(re);
        const matchB = b.match(re);
        
        const headA = matchA[1].toLowerCase();
        const headB = matchB[1].toLowerCase();
        
        if(headA !== headB){
            return headA < headB ? -1 : 1;
        }
        
        const numA = parseInt(matchA[2]);
        const numB = parseInt(matchB[2]);
        
        return numA - numB;
    })
}