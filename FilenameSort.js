function solution(files) {
    var parsedFiles = [];

    files.forEach(file => {
        const match = file.match(/^([a-zA-Z\s.-]+)(\d+)(.*)$/);
        if (match) {
            const HEAD = match[1];
            const NUMBER = match[2];
            const TAIL = match[3];
            parsedFiles.push({ HEAD, NUMBER, TAIL, original: file });
        }
    });

    parsedFiles.sort((a, b) => {
        const headA = a.HEAD.toLowerCase();
        const headB = b.HEAD.toLowerCase();
        if (headA < headB) return -1;
        if (headA > headB) return 1;

        const numberA = parseInt(a.NUMBER, 10);
        const numberB = parseInt(b.NUMBER, 10);
        if (numberA < numberB) return -1;
        if (numberA > numberB) return 1;

        return 0;
    });

    return parsedFiles.map(file => file.original);
}

console.log(solution(["foo010bar020.zip", "foo9.txt"]));