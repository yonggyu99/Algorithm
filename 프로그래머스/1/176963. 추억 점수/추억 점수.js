function solution(name, yearning, photo) {
    const scoreMap = {};
    for (let i = 0; i < name.length; i++) {
        scoreMap[name[i]] = yearning[i];
    }

    const result = photo.map(persons => {
        let sum = 0;
        for (let p of persons) {
            if (scoreMap[p]) sum += scoreMap[p];
        }
        return sum;
    });

    return result;
}