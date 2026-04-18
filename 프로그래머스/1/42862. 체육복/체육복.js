function solution(n, lost, reserve) {
    
    let realLost = lost.filter(l => !reserve.includes(l)).sort((a, b) => a - b);
    let realReserve = reserve.filter(r => !lost.includes(r)).sort((a, b) => a - b);

    const finalLost = realLost.filter(l => {

        const borrowFromFront = realReserve.find(r => r === l - 1);
        if (borrowFromFront) {
            realReserve = realReserve.filter(r => r !== borrowFromFront);
            return false;
        }

        const borrowFromBack = realReserve.find(r => r === l + 1);
        if (borrowFromBack) {
            realReserve = realReserve.filter(r => r !== borrowFromBack);
            return false;
        }

        return true;
    });

    return n - finalLost.length;
}