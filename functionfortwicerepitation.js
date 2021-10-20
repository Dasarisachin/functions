function countdigits(num) {
    let count = 0;
    while (num != 0) {
        num = parseInt(num / 10);
        count++;
    }
    return count;
}

console.log(countdigits(123456));

function maketwice(num) {
    let count = countdigits(num);
    let result = 0;
    switch (count) {
        case 1:
            return num * 10 + num;
        case 2:
            return num * 100 + num;
        case 3:
            return num * 1000 + num;
        case 4:
            return num * 10000 + num;
    }
}

console.log(maketwice(12));