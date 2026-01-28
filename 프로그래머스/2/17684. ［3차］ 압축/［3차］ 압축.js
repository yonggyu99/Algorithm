function solution(msg) {
    const dictionary = new Map();
    for (let i = 1; i <= 26; i++) {
        dictionary.set(String.fromCharCode(64 + i), i);
    }

    const result = [];
    let nextIndex = 27; 

    for (let i = 0; i < msg.length; ) {
        let w = msg[i];
        let j = i + 1;

        while (j < msg.length && dictionary.has(w + msg[j])) {
            w += msg[j];
            j++;
        }

        result.push(dictionary.get(w));

        if (j < msg.length) {
            const c = msg[j];
            dictionary.set(w + c, nextIndex++);
        }

        i += w.length;
    }

    return result;
}