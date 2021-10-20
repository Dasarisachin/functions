function checkforlastdigit(a, b) {
    let result1 = a % 10;
    let result2 = b % 10;

    if (result1 == result2) {
        console.log('Both the numbers have same last digit');
    }
    else {
        console.log('They have different last digits');
    }
}

let a = 25;
let b = 35;
checkforlastdigit(a, b);