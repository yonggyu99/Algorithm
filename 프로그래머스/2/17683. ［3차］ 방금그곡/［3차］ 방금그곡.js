function solution(m, musicinfos) {
    const replaceSharp = (str) => {
        return str.replace(/C#/g, 'c')
                  .replace(/D#/g, 'd')
                  .replace(/F#/g, 'f')
                  .replace(/G#/g, 'g')
                  .replace(/A#/g, 'a')
                  .replace(/B#/g, 'b');
    };

    const targetMelody = replaceSharp(m);
    const results = [];

    musicinfos.forEach((info, index) => {
        let [start, end, title, sheet] = info.split(',');

        const [startH, startM] = start.split(':').map(Number);
        const [endH, endM] = end.split(':').map(Number);
        const playTime = (endH * 60 + endM) - (startH * 60 + startM);

        const convertedSheet = replaceSharp(sheet);
        let fullMelody = "";
        
        for (let i = 0; i < playTime; i++) {
            fullMelody += convertedSheet[i % convertedSheet.length];
        }

        if (fullMelody.includes(targetMelody)) {
            results.push({ title, playTime, index });
        }
    });

    if (results.length === 0) return "(None)";

    results.sort((a, b) => {
        if (b.playTime !== a.playTime) return b.playTime - a.playTime;
        return a.index - b.index;
    });

    return results[0].title;
}