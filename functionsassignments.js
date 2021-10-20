//for even number
function checkforEven(num) {
    return num % 2 == 0;
}

console.log(checkforEven(10));
console.log(checkforEven(100));

console.log('.....................................');

//for odd number

function checkforOdd(num) {
    return num % 2 != 0;
}

console.log(checkforOdd(10));
console.log(checkforOdd(100));

console.log('.....................................');

//for divisible by 6

function divisibleby6(num) {
    return num % 6 == 0;
}

console.log(divisibleby6(10));
console.log(divisibleby6(36));

console.log('.....................................');

//for houly output

function time(seconds) {
    return hours = seconds / 3600;
}
console.log('No of hours = ' + time(7200));

console.log('.....................................');

//for finding 100th digit in 4digit number

function forhundredsplacedigit(num) {
    return hundred = parseInt(num / 100) % 10;
}

console.log(forhundredsplacedigit(1234));
console.log(forhundredsplacedigit(1058));

console.log('.....................................');

//for decimal 

function fordecimal(num1, num2, num3) {

    return ((num1 * 100) + (num2 * 10) + num3) / 100;
}

console.log(fordecimal(1, 2, 3));

console.log('.....................................');

//for boolean

function forandbooleans(booleanvalue1, booleanvalue2, booleanvalue3) {

    return booleanvalue1 && booleanvalue2 && booleanvalue3;

}
console.log(forandbooleans(true, true, false));
console.log(forandbooleans(true, false, false));
console.log(forandbooleans(true, true, true));

console.log('.....................................');

//for num1 greater than num2 and num3

function num1aslarger(num1, num2, num3) {
    return num1 > num2 || num1 > num3;
}

console.log(num1aslarger(9, 8, 7));
console.log(7, 8, 9);

console.log('.....................................');