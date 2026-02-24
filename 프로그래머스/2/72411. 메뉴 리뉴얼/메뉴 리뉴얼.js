function solution(orders, course) {
    var answer = [];
    
    function getCombinations(arr, selectNumber) {
    const results = [];
    if (selectNumber === 1) return arr.map((value) => [value]);

    arr.forEach((fixed, index, origin) => {
        const rest = origin.slice(index + 1);
        const combinations = getCombinations(rest, selectNumber - 1);
        const attached = combinations.map((combination) => [fixed, ...combination]);
        results.push(...attached);
    });

    return results;
}
    
    course.forEach(len => {
        const menuCounts = {};
        let maxCount = 0;

        orders.forEach(order => {
            const sortedOrder = order.split('').sort();
            
            const combinations = getCombinations(sortedOrder, len);
            
            combinations.forEach(comb => {
                const menu = comb.join('');
                menuCounts[menu] = (menuCounts[menu] || 0) + 1;
                
                if (menuCounts[menu] > maxCount) {
                    maxCount = menuCounts[menu];
                }
            });
        });

        if (maxCount >= 2) {
            for (const menu in menuCounts) {
                if (menuCounts[menu] === maxCount) {
                    answer.push(menu);
                }
            }
        }
    });

    return answer.sort();
}