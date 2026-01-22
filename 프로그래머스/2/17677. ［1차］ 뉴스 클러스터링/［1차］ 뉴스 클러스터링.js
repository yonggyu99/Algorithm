function solution(str1, str2) {
    function makeMap(str) {
        const map = new Map();
        str = str.toLowerCase();

        for (let i = 0; i < str.length - 1; i++) {
            const pair = str[i] + str[i + 1];

            if (/^[a-z]{2}$/.test(pair)) {
                map.set(pair, (map.get(pair) || 0) + 1);
            }
        }
        return map;
    }

    const map1 = makeMap(str1);
    const map2 = makeMap(str2);

    let intersection = 0;
    let union = 0;

    const allKeys = new Set([...map1.keys(), ...map2.keys()]);

    for (let key of allKeys) {
        const count1 = map1.get(key) || 0;
        const count2 = map2.get(key) || 0;

        intersection += Math.min(count1, count2);
        union += Math.max(count1, count2);
    }

    if (union === 0) return 65536;

    return Math.floor((intersection / union) * 65536);
}
